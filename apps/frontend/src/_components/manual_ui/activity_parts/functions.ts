import { Activity, ActivityDetail } from 'types/type';
import { client } from '@/utils/client';

export const getActivities = async (clerk_id: string) => {

  let activity: Activity[] = [];
  let activityDetail: ActivityDetail[] = [];
  try {
    // 1. Activityを取得
    const res = await client.api.activity.$get({
      query: { clerk_id: clerk_id },
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Activity API Error:', {
        status: res.status,
        body: errorBody,
      });
      throw new Error(`Activity APIエラー: ${res.status} - ${errorBody}`);
    }

    activity = (await res.json()) as Activity[];

    // 2. Activityが存在する場合のみ、ActivityDetailを取得
    if (activity.length > 0) {
      // activity_idの配列を作成
      const activityIds = activity.map(item => item.id);

      // ActivityDetailを取得
      const res2 = await client.api.activityDetail.$get({
        query: { activity_ids: activityIds.join(',') },
      });

      if (!res2.ok) {
        // ActivityDetailが見つからない場合は空の配列を返す
        if (res2.status === 404) {
          console.log('ActivityDetailが見つかりませんでした');
          activityDetail = [];
        } else {
          const errorBody = await res2.text();
          console.error('ActivityDetail API Error:', {
            status: res2.status,
            body: errorBody,
            activityIds: activityIds.join(','),
          });
          throw new Error(`ActivityDetail APIエラー: ${res2.status} - ${errorBody}`);
        }
      } else {
        activityDetail = (await res2.json()) as ActivityDetail[];
      }
    }
  } catch (error) {
    console.error('Error in ActivityTabs:', error);
    throw error; // エラーを再スローして親コンポーネントに伝播
  }

  return { activity, activityDetail };
};