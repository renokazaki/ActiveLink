import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const friendRequest = new Hono()
  .get("/search", async (c) => {
    const clerkId = c.req.query("clerk_id");
    const friendRequests = await prisma.user.findMany({
      where: {
        clerk_id: clerkId,
      },
    });
    return c.json(friendRequests);
  })

  export default friendRequest;
