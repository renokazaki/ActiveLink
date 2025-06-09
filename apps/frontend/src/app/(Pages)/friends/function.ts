'use server';
import { getActivities } from '@/_components/manual_ui/activity_parts/functions';
import { calculateActivityStats } from '@/utils/calculateActivity';
import { client } from '@/utils/client';
import { revalidatePath } from 'next/cache';
import { User } from 'types/type';

export const getFriends = async (userId: string) => {
  try {
    const res = await client.api.user.allFriends.$get({
      query: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const friendsData = (await res.json()) as User[];
    return friendsData;
  } catch (error) {
    console.error('友達一覧取得エラー:', error);
    return null;
  }
};

export const getFriendsData = async (clerk_id: string) => {
  const res = await client.api.user.friends[':clerk_id'].$get({
    param: { clerk_id: clerk_id },
  });

  const friendsData = (await res.json()) as User;
  return friendsData;
};

export const deleteFriend = async (myClerkId: string, friendClerkId: string) => {
  try {
    // 直接APIを呼び出す
    const response = await client.api.friendRequest.deleteFriend.$delete({
      json: { myClerkId, friendClerkId },
    });

    if (!response.ok) {
      throw new Error('友達の削除に失敗しました');
    }

    // ページを更新する
    revalidatePath('/friends');
  } catch (error) {
    console.error('削除エラー:', error);
  }
};

// 各フレンドの活動データを取得
export const getFriendsWithActivity = async (friendsData: User[]) =>
  await Promise.all(
    friendsData.map(async friend => {
      try {
        // 活動データを取得
        const { activity, activityDetail } = await getActivities(friend.clerk_id);

        // 活動統計を計算
        const stats = calculateActivityStats(activity, activityDetail);

        return {
          ...friend,
          totalActivityDays: stats.totalDays,
          currentMonthActivityDays: stats.currentMonthDays,
        };
      } catch (error) {
        console.error(`Error fetching activity for ${friend.display_name}:`, error);
        return {
          ...friend,
          totalActivityDays: 0,
          currentMonthActivityDays: 0,
        };
      }
    })
  );
