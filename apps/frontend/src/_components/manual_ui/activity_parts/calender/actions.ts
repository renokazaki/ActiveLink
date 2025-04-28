"use server";

import { revalidatePath } from "next/cache";
import { client } from "@/utils/client";
import { Activity } from "types/type";

// ISO-8601形式の日本時間を取得する関数
function getJapanTimeISOString(dateStr?: string) {
  let date;

  if (dateStr) {
    // 日付文字列が指定されている場合、その日付をベースにする
    date = new Date(dateStr);
  } else {
    // 指定がない場合は現在時刻
    date = new Date();
  }

  // 日本時間に調整（UTC+9時間）
  const jpTime = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  // ISO-8601文字列を返す（例: 2025-04-22T12:34:56.789Z）
  return jpTime.toISOString();
}

export async function createActivityDetail(formData: FormData) {
  const user_clerk_id = formData.get("user_clerk_id") as string;
  const activity_date = formData.get("activity_date") as string;
  const description = formData.get("description") as string;
  const duration_minutes = parseInt(formData.get("duration_minutes") as string);
  const category = formData.get("category") as string;

  if (
    !user_clerk_id ||
    !activity_date ||
    !description ||
    !duration_minutes ||
    isNaN(duration_minutes) ||
    !category
  ) {
    console.error("必須項目が不足しています");
    return;
  }

  try {
    // 1. 指定された日付のActivityを検索
    const activityResponse = await client.api.activity.$get({
      query: { clerk_id: user_clerk_id },
    });

    if (!activityResponse.ok) {
      throw new Error("活動データの取得に失敗しました");
    }

    const activities: Activity[] = await activityResponse.json();

    // 指定した日付に一致するアクティビティを検索
    const targetActivity = activities.find((act: Activity) => {
      return act.activity_date.split("T")[0] === activity_date;
    });

    let activityId;

    // 2. 該当日のActivityが存在しない場合は新規作成
    if (!targetActivity) {
      // ISO-8601形式の完全な日時文字列を生成
      const isoDateString = getJapanTimeISOString(activity_date);

      const newActivityResponse = await client.api.activity.$post({
        json: {
          user_clerk_id,
          activity_date: isoDateString, // 完全なISO-8601形式を使用
        },
      });

      if (!newActivityResponse.ok) {
        throw new Error("活動の作成に失敗しました");
      }

      const newActivity = await newActivityResponse.json();
      activityId = newActivity.id;
    } else {
      // 既存のActivityを使用
      activityId = targetActivity.id;
    }

    // 3. ActivityDetailを作成
    const detailResponse = await client.api.activityDetail.$post({
      json: {
        activity_id: activityId,
        description,
        duration_minutes,
        category,
      },
    });

    if (!detailResponse.ok) {
      throw new Error("活動詳細の登録に失敗しました");
    }

    // ページを再検証して最新データを表示
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating activity detail:", error);
    // エラーはログに記録するだけ
  }

  // 何も返さない（Promise<void>）
}
