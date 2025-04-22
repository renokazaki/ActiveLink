import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const user = new Hono()

  .get("/", async (c) => {
    const userData = await prisma.user.findFirst();
    return c.json(userData);
  })

  .get("/allFriends", async (c) => {
    const userFriends = await prisma.user.findMany();
    return c.json(userFriends);
  })

  .get("/friends/:id", async (c) => {
    const id = c.req.param("id");

    // 文字列をNumber型に変換
    const numericId = parseInt(id, 10);

    // 数値変換が成功したかチェック
    if (isNaN(numericId)) {
      return c.json({ error: "Invalid ID format" }, 400);
    }

    try {
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
    } catch (error) {
      console.error("Error fetching user:", error);
      return c.json({ error: "Failed to fetch user data" }, 500);
    }
  });

export default user;
