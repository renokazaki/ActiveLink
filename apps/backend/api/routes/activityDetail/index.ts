import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const activityDetail = new Hono()
  .get("/", async (c) => {
    const activityIdsParam = c.req.query("activity_ids");

    let where = {};

    if (activityIdsParam) {
      // カンマ区切りのIDリストを配列に変換
      const activityIds = activityIdsParam
        .split(",")
        .map((id) => parseInt(id, 10));

      where = {
        activity_id: {
          in: activityIds,
        },
      };
    }

    const activityDetail = await prisma.activityDetail.findMany({
      where: where,
    });

    if (!activityDetail || activityDetail.length === 0) {
      return c.json({ error: "ActivityData not found" }, 404);
    }

    return c.json(activityDetail);
  })
  .post("/", async (c) => {
    try {
      // リクエストボディを取得
      const body = await c.req.json();
      const { activity_id, description, duration_minutes, category } = body;

      // バリデーション
      if (!activity_id) {
        return c.json({ error: "activity_id is required" }, 400);
      }

      if (!description) {
        return c.json({ error: "description is required" }, 400);
      }

      if (!duration_minutes || duration_minutes <= 0) {
        return c.json({ error: "valid duration_minutes is required" }, 400);
      }

      if (!category) {
        return c.json({ error: "category is required" }, 400);
      }

      // ActivityDetailを作成
      const newActivityDetail = await prisma.activityDetail.create({
        data: {
          activity_id,
          description,
          duration_minutes,
          category,
        },
      });

      return c.json(newActivityDetail, 201);
    } catch (error) {
      console.error("Error creating activity detail:", error);
      return c.json({ error: "Failed to create activity detail" }, 500);
    }
  })
  .delete("/:id", async (c) => {
    try {
      const id = parseInt(c.req.param("id"), 10);
      if (isNaN(id)) {
        return c.json({ error: "Invalid id format" }, 400);
      }

      // データの削除
      const deletedDetail = await prisma.activityDetail.delete({
        where: { id },
      });

      return c.json(deletedDetail);
    } catch (error) {
      console.error("Error deleting activity detail:", error);
      return c.json({ error: "Failed to delete activity detail" }, 500);
    }
  })
  .put("/:id", async (c) => {
    try {
      const id = parseInt(c.req.param("id"), 10);
    

      // リクエストボディを取得
      const body = await c.req.json<{ description: string; duration_minutes: number; category: string }>();
      const { description, duration_minutes, category } = body;

    

      // ActivityDetailを更新
      const updatedActivityDetail = await prisma.activityDetail.update({
        where: { id },
        data: {
          description,
          duration_minutes,
          category,
        },
      });

      return c.json(updatedActivityDetail);
    } catch (error) {
      console.error("Error updating activity detail:", error);
      
     
    }
  })

export default activityDetail;
