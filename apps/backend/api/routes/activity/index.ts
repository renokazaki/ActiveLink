import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const activity = new Hono()
  .get("/", async (c) => {
    const clerk_id = c.req.query("clerk_id");
    const activity = await prisma.activity.findMany({
      where: {
        user_clerk_id: clerk_id,
      },
    });

    if (!activity) {
      return c.json({ error: "activity not found" }, 404);
    }

    return c.json(activity);
  })
  .post("/", async (c) => {
    try {
      const body = await c.req.json();
      const { user_clerk_id, activity_date } = body;

      if (!user_clerk_id) {
        return c.json({ error: "user_clerk_id is required" }, 400);
      }

      // 今日の日付でactivityレコードを作成
      const newActivity = await prisma.activity.create({
        data: {
          user_clerk_id,
          activity_date:
            activity_date || new Date().toISOString().split("T")[0],
        },
      });

      return c.json(newActivity, 201);
    } catch (error) {
      console.error("Error creating activity:", error);
      return c.json({ error: "Failed to create activity" }, 500);
    }
  });

export default activity;
