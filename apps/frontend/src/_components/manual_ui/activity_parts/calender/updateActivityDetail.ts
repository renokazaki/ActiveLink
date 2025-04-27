// // actions.ts に追加

// import { client } from "@/utils/client";
// import { revalidatePath } from "next/cache";

// /**
//  * ActivityDetailを更新するサーバーアクション
//  */
// export async function updateActivityDetail(formData: FormData) {
//   const id = parseInt(formData.get("id") as string);
//   const description = formData.get("description") as string;
//   const duration_minutes = parseInt(formData.get("duration_minutes") as string);
//   const category = formData.get("category") as string;

//   if (!id || isNaN(id)) {
//     console.error("更新対象のIDが無効です");
//     return;
//   }

//   if (
//     !description ||
//     !duration_minutes ||
//     isNaN(duration_minutes) ||
//     !category
//   ) {
//     console.error("必須項目が不足しています");
//     return;
//   }

//   try {
//     // パラメータとJSONをリクエストオプションに統合
//     const response = await client.api.activityDetail[":id"].$put({

//           json: {
//             id,
//             description,
//             duration_minutes,
//             category
//           }
//         }
//       );

//     if (!response.ok) {
//       throw new Error("活動詳細の更新に失敗しました");
//     }

//     // ページを再検証して最新データを表示
//     revalidatePath("/");
//   } catch (error) {
//     console.error("Error updating activity detail:", error);
//     // エラーはログに記録するだけ
//   }

//   // 何も返さない（Promise<void>）
// }
