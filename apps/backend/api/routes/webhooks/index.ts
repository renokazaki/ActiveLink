import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "../../../prisma/prisma";
import { Hono } from "hono";

const webhookRouter = new Hono().post("/", async (c) => {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.error(
      "Error: SIGNING_SECRET is not defined in environment variables"
    );
    return c.json({ error: "Server configuration error" }, 500);
  }

  const wh = new Webhook(SIGNING_SECRET);
  // Honoでヘッダーを取得
  const svix_id = c.req.header("svix-id");
  const svix_timestamp = c.req.header("svix-timestamp");
  const svix_signature = c.req.header("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return c.json({ error: "Missing Svix headers" }, 400);
  }

  const payload = await c.req.json();
  let evt: WebhookEvent;

  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", (err as Error).message);
    return new Response("Error: Verification error", { status: 400 });
  }

  if (evt.type === "user.created") {
    try {
      await prisma.user.create({
        data: {
          clerk_id: evt.data.id,
          display_name: evt.data.username || "New User", // 型に合わせて修正
          profile_image: evt.data.image_url || "/default-avatar.png", // 型に合わせて修正
          target: "", // User型に必要なフィールド
          is_active: true, // User型に必要なフィールド
          created_at: new Date(),
          updated_at: new Date(),
        },
      });

      return c.json({ message: "User and category created successfully" }, 201);
    } catch (err) {
      console.error("Error inserting user or category into database:", err);
      return c.json({ error: "Database operation failed" }, 500);
    }
  }

  if (evt.type === "user.deleted") {
    try {
      await prisma.user.delete({
        where: { clerk_id: evt.data.id },
      });

      return new Response("User deleted successfully", { status: 200 });
    } catch (err) {
      console.error("Error deleting user:", err);
      return new Response("Error: Database operation failed", { status: 500 });
    }
  }

   if (evt.type === "user.updated") {
    try {
      await prisma.user.update({
        where: { clerk_id: evt.data.id },
        data: {
          display_name: evt.data.username!,
          profile_image: evt.data.image_url!,
        },  
      });

      return new Response("User updated successfully", { status: 200 });
    } catch (err) {
      console.error("Error updating user:", err);
      return new Response("Error: Database operation failed", { status: 500 });
    }
  }


  return c.json({ message: "Webhook received" }, 200);
});
export default webhookRouter;
