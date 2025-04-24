"use server";

import { revalidatePath } from "next/cache";
import { client } from "@/utils/client";

export async function createWeeklyTarget(clerk_id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title || !description) {
    // エラーを投げるか、ログに記録するだけにする
    console.error("タイトルと説明は必須です");
    return; // Promise<void> を満たすため、何も返さない
  }

  try {
    // 今日の日付を取得
    const today = new Date();
    // 週の終わりの日付を計算（7日後）
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 6);

    // APIを使って週間目標を作成
    const response = await client.api.weeklyTarget.$post({
      json: {
        title,
        description,
        target_start_date: today.toISOString(),
        target_end_date: endDate.toISOString(),
        status: "pending",
        created_at: today.toISOString(),
        updated_at: today.toISOString(),
        clerk_id: clerk_id,
      },
    });

    if (!response.ok) {
      throw new Error("週間目標の作成に失敗しました");
    }

    // ページを再検証して最新データを表示
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating weekly target:", error);
    // エラーを投げるか、ログに記録するだけにする
  }

  // 何も返さない（Promise<void>）
}
