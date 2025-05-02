"use server"

import { client } from "@/utils/client";
import { revalidatePath } from "next/cache";

  // 活動詳細の削除ハンドラー
 export async function DeleteDetail(id: string) {

    try {
      const response = await client.api.activityDetail[":id"].$delete({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("活動詳細の削除に失敗しました");
      }

      // 成功したらUIを更新
      revalidatePath("/");  
    } catch (error) {
      console.error("Error deleting activity detail:", error);
    }
  };