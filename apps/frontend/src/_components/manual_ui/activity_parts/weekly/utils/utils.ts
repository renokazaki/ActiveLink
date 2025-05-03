// import { client } from "@/utils/client";
// import { revalidatePath } from "next/cache";

// export async function deleteWeeklyTarget(id: string) {
//     try {
//       // APIを使って週間目標を削除
//       const response = await client.api.weeklyTarget[":id"].$delete({
//         param: { id },
//       });
  
//       if (!response.ok) {
//         throw new Error("週間目標の削除に失敗しました");
//       }
  
//       // ページを再検証して最新データを表示
//       revalidatePath("/");
//     } catch (error) {
//       console.error("Error deleting weekly target:", error);
//       // エラーを投げるか、ログに記録するだけにする
//     }
  
//     // 何も返さない（Promise<void>）
//   }