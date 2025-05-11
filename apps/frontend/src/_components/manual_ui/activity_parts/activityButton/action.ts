"use server"

import { client } from "@/utils/client";
import { revalidatePath } from "next/cache";

    // ISO-8601形式の日本時間を取得
   const getJapanTimeISOString = () => {
    const now = new Date();
    // 日本時間に調整（UTC+9時間）
    const jpTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return jpTime.toISOString();
  };


  export const startActivity = async (userId: string) => {

    try {
      const response = await client.api.activity.$post({
        json: {
          user_clerk_id: userId,
          activity_date: getJapanTimeISOString(),
        },
      });

      if (!response.ok) throw new Error("登録に失敗しました");

      revalidatePath("/");
    } catch (error) {
      console.error("エラー:", error);
    }
  };