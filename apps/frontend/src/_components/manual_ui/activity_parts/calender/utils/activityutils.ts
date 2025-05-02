/**
 * 日付操作とアクティビティ関連のユーティリティ関数
 */

import { Activity, ActivityDetail } from "types/type";
import { client } from "@/utils/client";

/**
 * ISO-8601形式の日本時間を取得する関数
 */
export function getJapanTimeISOString(dateStr?: string) {
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
 * 指定された日付のアクティビティを検索または作成する
 */
export async function getOrCreateActivity(
  user_clerk_id: string,
  activity_date: string
): Promise<number> {
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

  // 既存のアクティビティが見つかった場合はそのIDを返す
  if (targetActivity) {
    return targetActivity.id
  }

  // 2. 該当日のActivityが存在しない場合は新規作成
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
  return newActivity.id;
}

/**
 * 活動詳細を作成する
 */
export async function createActivityDetail(
  activity_id: number,
  description: string,
  duration_minutes: number,
  category: string
): Promise<ActivityDetail> {
  const detailResponse = await client.api.activityDetail.$post({
    json: {
      activity_id,
      description,
      duration_minutes,
      category,
    },
  });

  if (!detailResponse.ok) {
    throw new Error("活動詳細の登録に失敗しました");
  }

  return await detailResponse.json() as ActivityDetail;
}

/**
 * 活動詳細を削除する
 */
export async function deleteActivityDetail(id: string): Promise<boolean> {
  const response = await client.api.activityDetail[":id"].$delete({
    param: { id },
  });

  if (!response.ok) {
    throw new Error("活動詳細の削除に失敗しました");
  }

  return true;
}

// /**
//  * 活動詳細を更新する
//  */
// export async function updateActivityDetail(
//   id: string,
//   description: string,
//   duration_minutes: number,
//   category: string
// ): Promise<ActivityDetail> {
//   const response = await client.api.activityDetail[":id"].$put({
//     param: { id },
//     json: {
//         description,
//         duration_minutes,
//         category,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("活動詳細の更新に失敗しました");
//   }

//   return await response.json() as ActivityDetail;
// }

/**
 * 特定の日付のアクティビティ詳細を取得する
 */
export function getActivityDetailsForDate(
  selectedDate: string,
  activity: Activity[],
  activityDetail: ActivityDetail[]
): ActivityDetail[] {
  // 選択した日付のActivityを取得
  const selectedActivity = selectedDate
    ? activity.find(
        (item) =>
          new Date(item.activity_date).toISOString().split("T")[0] ===
          selectedDate
      )
    : null;

  // 選択した日付のActivityDetailを取得
  return selectedActivity
    ? activityDetail.filter(
        (detail) => detail.activity_id === selectedActivity.id
      )
    : [];
}

/**
 * カレンダーイベント用のデータを作成する
 */
export function createCalendarEvents(activity: Activity[]) {
  return activity.map((item) => ({
    date: new Date(item.activity_date).toISOString().split("T")[0],
    display: "background",
    backgroundColor: "rgba(10, 300, 100)",
  }));
}