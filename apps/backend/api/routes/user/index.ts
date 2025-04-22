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

    const friendData = await prisma.user.findFirst({
      where: {
        id: numericId, // 数値型のIDを使用
      },
    });

    return c.json(friendData);
  });

export default user;
