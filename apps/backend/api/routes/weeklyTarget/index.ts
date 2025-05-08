import { Hono } from "hono";
import { prisma } from "../../../prisma/prisma";

const weeklyTarget = new Hono()

  .get("/", async (c) => {
    const clerk_id = c.req.query("clerk_id");

    const weeklyTarget = await prisma.weeklyTarget.findMany({
      where: {
        user_clerk_id: clerk_id,
      },
    });

    if (!weeklyTarget) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json(weeklyTarget);
  })

  .post("/", async (c) => {
    try {
      // リクエストボディからデータを取得
      const {
        title,
        description,
        target_start_date,
        target_end_date,
        status,
        created_at,
        updated_at,
        clerk_id,
      } = await c.req.json();

      // 必須パラメータのチェック
      if (
        !title ||
        !description ||
        !target_start_date ||
        !target_end_date ||
        !clerk_id
      ) {
        return c.json({ error: "必須パラメータが不足しています" }, 400);
      }

      // 週間目標をデータベースに作成
      const newWeeklyTarget = await prisma.weeklyTarget.create({
        data: {
          title,
          description,
          target_start_date: target_start_date,
          target_end_date: target_end_date,
          status: status || "pending",
          created_at,
          updated_at,
          user_clerk_id: clerk_id,
        },
      });

      return c.json(
        {
          message: "週間目標が正常に作成されました",
          data: newWeeklyTarget,
        },
        201
      );
    } catch (error) {
      console.error("週間目標作成エラー:", error);
      return c.json({ error: "週間目標の作成中にエラーが発生しました" }, 500);
    }
  })
  .delete("/:id", async (c) => {
    try {
      const id = parseInt(c.req.param("id"), 10);
      if (isNaN(id)) {
        return c.json({ error: "Invalid id format" }, 400);
      }

      // データの削除
      const deletedDetail = await prisma.weeklyTarget.delete({
        where: { id },
      });

      return c.json(deletedDetail);
    } catch (error) {
      console.error("Error deleting weekly target:", error);
      return c.json({ error: "Failed to delete weekly target" }, 500);
    }
  })
  .put("/", async (c) => {
      try {
      
  
        // リクエストボディを取得
        const body = await c.req.json();
        const { id, title, description, status } = body;
  
      
  
        // ActivityDetailを更新
        const updatedActivityDetail = await prisma.weeklyTarget.update({
          where: { id: id },
          data: {
            title,
            description,
            status,
          },
        });
  
        return c.json(updatedActivityDetail);
      } catch (error) {
        console.error("Error updating weekly target:", error);
        
       
      }
    })

export default weeklyTarget;
