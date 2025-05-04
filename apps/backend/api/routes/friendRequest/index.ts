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
  .post("/sendRequest", async (c) => {
    const body = await c.req.json();
    const {myClerkId, friendsClerkId } = body;
    const friendRequest = await prisma.friendship.create({
      data: {
        sender_clerk_id: myClerkId,
        receiver_clerk_id: friendsClerkId,
        status: "pending",
      },
    });
    return c.json(friendRequest);
  })
  // .get("/allFriendRequest", async (c) => {
  //   const clerkId = c.req.query("clerk_id");
    
  //   if (!clerkId) {
  //     return c.json({ error: "clerk_idが必要です" }, 400);
  //   }
    
  //   const friendRequests = await prisma.friendship.findMany({
  //     where: {
  //       receiver_clerk_id: clerkId,
  //       status: "pending",
  //     },
  //     include: {
  //       sender: true,  // senderユーザーの情報を含める
  //       receiver: true // receiverユーザーの情報を含める
  //     }
  //   });
    
  //   return c.json(friendRequests);
  // })

  export default friendRequest;
