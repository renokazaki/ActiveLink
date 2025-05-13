import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";
import user from "./routes/user";
import webhookRouter from "./routes/webhooks";
import weeklyTarget from "./routes/weeklyTarget";

//👷開発用
// import { serve } from "@hono/node-server";
import activity from "./routes/activity";
import activityDetail from "./routes/activityDetail";
import friendRequest from "./routes/friendRequest";
import line from "./routes/line";

export const config = {
  runtime: "edge",
};

const app = new Hono()
  .basePath("/api")
  .use('/*', cors({
    origin: ["*", "http://localhost:3000", "https://active-link.vercel.app","https://active-link.vercel.app/line"],  // 本番とローカル両方を許可
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,  // 必要に応じて
  }))
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  })
  .route("/user", user)
  .route("/weeklyTarget", weeklyTarget)
  .route("/webhookRouter", webhookRouter)
  .route("/activity", activity)
  .route("/activityDetail", activityDetail)
  .route("/friendRequest", friendRequest)
  .route("/line", line)


// 👷開発用
// const port = 8085;
// console.log(`Server is running on http://localhost:${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });

export type AppType = typeof app;

export default handle(app);
