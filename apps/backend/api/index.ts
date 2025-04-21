import { Hono } from "hono";
import { cors } from "hono/cors";

import { handle } from "hono/vercel";
import { prisma } from "../prisma/prisma";

//👷開発用
// import { serve } from "@hono/node-server";

export const config = {
  runtime: "edge",
};

const app = new Hono()
  .basePath("/api")
  .use(
    "*",
    cors({
      origin: "*",
    })
  )
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  })

  .get("/user", async (c) => {
    const gettodos = await prisma.user.findMany();
    return c.json(gettodos);
  });

// 👷開発用
// const port = 8085;
// console.log(`Server is running on http://localhost:${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });

export type AppType = typeof app;

export default handle(app);
