'use server';

import { client } from '@/utils/client';
import { User } from 'types/type';

interface FriendRequest {
  id: number;
  sender_clerk_id: string;
  receiver_clerk_id: string;
  status: string;
  created_at: string;
  sender: User;
  receiver: User;
}

interface UserWithFriendship extends User {
  friendship?: {
    id: number;
    status: string;
    is_sender: boolean;
  } | null;
}

export async function getPendingRequests(userId: string): Promise<FriendRequest[]> {
  try {
    const res = await client.api.friendRequest.pendingRequests.$get({
      query: { clerk_id: userId },
    });

    if (res.ok) {
      return await res.json() as FriendRequest[];
    }
    return [];
  } catch (error) {
    console.error('保留中の友達申請の取得エラー:', error);
    return [];
  }
}

export async function searchUsers(query: string, myClerkId: string): Promise<UserWithFriendship[]> {
  try {
    const res = await client.api.friendRequest.search.$get({
      query: {
        clerk_id: query,
        my_clerk_id: myClerkId,
      },
    });

    return await res.json() as UserWithFriendship[];
  } catch (error) {
    console.error('検索エラー:', error);
    return [];
  }
}

export async function sendFriendRequest(myClerkId: string, friendsClerkId: string) {
  try {
    const res = await client.api.friendRequest.sendRequest.$post({
      json: { myClerkId, friendsClerkId },
    });

    if (!res.ok) {
      throw new Error('友達申請に失敗しました');
    }

    return { success: true };
  } catch (error) {
    console.error('友達申請エラー:', error);
    throw error;
  }
}

export async function respondToRequest(requestId: number, action: 'accept' | 'reject') {
  try {
    let res;

    if (action === 'accept') {
      res = await client.api.friendRequest.respondRequest.$put({
        json: { requestId, action },
      });
    } else {
      res = await client.api.friendRequest.deleteRequest.$delete({
        json: { requestId },
      });
    }

    if (!res.ok) {
      throw new Error(action === 'accept' ? '承認に失敗しました' : '拒否に失敗しました');
    }

    return { success: true };
  } catch (error) {
    console.error('友達申請応答エラー:', error);
    throw error;
  }
}