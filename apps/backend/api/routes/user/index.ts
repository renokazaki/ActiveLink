import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const user = new Hono()

  .get("/", async (c) => {
    const clerk_id = c.req.query("clerk_id");

    const userData = await prisma.user.findFirst({
      where: { clerk_id },
    });
    return c.json(userData);
  })

  .get("/allFriends", async (c) => {
    const clerk_id = c.req.query("clerk_id");

    // clerk_idからユーザーを検索
    const currentUser = await prisma.user.findUnique({
      where: { clerk_id },
    });

    if (!currentUser) {
      return c.json({ error: "ユーザーが見つかりません" }, 404);
    }

    // ユーザーIDを使用して、友達関係にあるユーザーを検索
    const friends = await prisma.user.findMany({
      where: {
        OR: [
          // 自分がsender_idとなっている承認済みの友達関係
          {
            received_friendships: {
              some: {
                sender_clerk_id: currentUser.clerk_id,
                status: "accepted",
              },
            },
          },
          // 自分がreceiver_idとなっている承認済みの友達関係
          {
            sent_friendships: {
              some: {
                receiver_clerk_id: currentUser.clerk_id,
                status: "accepted",
              },
            },
          },
        ],
      },
    });
    return c.json(friends);
  })

  .get("/friends/:id", async (c) => {
    const id = c.req.param("id");

    // 文字列をNumber型に変換
    const numericId = parseInt(id, 10);

    // 数値変換が成功したかチェック
    if (isNaN(numericId)) {
      return c.json({ error: "Invalid ID format" }, 400);
    }

    // findManyではなくfindUniqueを使用
    const friendData = await prisma.user.findUnique({
      where: {
        id: numericId,
      },
    });

    if (!friendData) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json(friendData);
  });

export default user;
