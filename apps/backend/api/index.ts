import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";
import user from "./routes/user";
import webhookRouter from "./routes/webhooks";
import weeklyTarget from "./routes/weeklyTarget";

//👷開発用
// import { serve } from "@hono/node-server";
import activity from "./routes/activity";

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
  .route("/user", user)
  .route("/weeklyTarget", weeklyTarget)
  .route("/webhookRouter", webhookRouter)
  .route("/activity", activity);

// 👷開発用
// const port = 8085;
// console.log(`Server is running on http://localhost:${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });

export type AppType = typeof app;

export default handle(app);
