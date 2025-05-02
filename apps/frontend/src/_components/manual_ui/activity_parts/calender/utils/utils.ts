import { client } from "@/utils/client";

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
    } catch (error) {
      console.error("Error deleting activity detail:", error);
    }
  };