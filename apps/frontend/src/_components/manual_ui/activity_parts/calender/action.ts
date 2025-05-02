"use server";

import { revalidatePath } from "next/cache";
import { client } from "@/utils/client";
import { Activity } from "types/type";

// ISO-8601形式の日本時間を取得する関数
function getJapanTimeISOString(dateStr?: string) {
  let date;

  if (dateStr) {
    date = new Date(dateStr);
  } else {
    date = new Date();
  }

  // 日本時間に調整（UTC+9時間）
  const jpTime = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  return jpTime.toISOString();
}

/**
 * 活動詳細を新規作成するサーバーアクション
 */
export async function createActivityDetail(formData: FormData) {
  try {
    const user_clerk_id = formData.get("user_clerk_id") as string;
    const activity_date = formData.get("activity_date") as string;
    const description = formData.get("description") as string;
    const duration_minutes = parseInt(
      formData.get("duration_minutes") as string
    );
    const category = formData.get("category") as string;

    // 1. 指定された日付のActivityを検索
    const activityResponse = await client.api.activity.$get({
      query: { clerk_id: user_clerk_id },
    });

    if (!activityResponse.ok) {
      throw new Error("活動データの取得に失敗しました");
    }

    const responseData = await activityResponse.json();
    // TypeScriptのエラーを回避するために型アサーションを使用
    const activities = Array.isArray(responseData) ? responseData : [];
    // 指定した日付に一致するアクティビティを検索
    const targetActivity = activities.find((act: Activity) => {
      return act.activity_date.split("T")[0] === activity_date;
    }) as Activity | undefined;

    let activityId;

    // 2. 該当日のActivityが存在しない場合は新規作成
    if (!targetActivity) {
      // ISO-8601形式の完全な日時文字列を生成
      const isoDateString = getJapanTimeISOString(activity_date);

      const newActivityResponse = await client.api.activity.$post({
        json: {
          user_clerk_id,
          activity_date: isoDateString,
        },
      });

      if (!newActivityResponse.ok) {
        throw new Error("活動の作成に失敗しました");
      }

      // レスポンスを型アサーションを使って処理
      const newActivityData = await newActivityResponse.json();
      // TypeScriptエラーを回避するために型アサーションを使用
      const newActivity = newActivityData as Activity;
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

    // キャッシュの再検証
    revalidatePath("/");
    
  } catch (error) {
    console.error("Error creating activity detail:", error);

  }
}