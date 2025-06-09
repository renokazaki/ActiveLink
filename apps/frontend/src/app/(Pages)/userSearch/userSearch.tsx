'use client';

import { useState } from 'react';
import { Button } from '@/_components/shadcn_ui/button';
import { Input } from '@/_components/shadcn_ui/input';
import { toast } from 'sonner';
import { searchUsers, sendFriendRequest } from './function';
import FriendshipButton from './friendshipButton';

interface User {
  id: number;
  clerk_id: string;
  display_name: string;
  profile_image: string;
}

interface UserWithFriendship extends User {
  friendship?: {
    id: number;
    status: string;
    is_sender: boolean;
  } | null;
}

interface Props {
  userId: string;
}

export default function UserSearchClient({ userId }: Props) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserWithFriendship[]>([]);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const results = await searchUsers(query, userId);
      setUsers(results);
    } catch (error) {
      console.error('検索エラー:', error);
      toast.error('検索に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleSendRequest = async (friendsClerkId: string) => {
    try {
      await sendFriendRequest(userId, friendsClerkId);
      toast.success('友達申請を送信しました');
      
      // ローカル状態を更新
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.clerk_id === friendsClerkId
            ? {
                ...user,
                friendship: {
                  id: 0,
                  status: 'pending',
                  is_sender: true,
                },
              }
            : user
        )
      );
    } catch (error) {
      console.error('友達申請エラー:', error);
      toast.error('友達申請に失敗しました');
    }
  };

  return (
    <>
      {/* 検索フォーム */}
      <div className="flex gap-2">
        <Input
          placeholder="ユーザー名を検索"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <Button
          onClick={handleSearch}
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
        >
          {loading ? '検索中...' : '検索'}
        </Button>
      </div>

      {/* 検索結果 */}
      {users.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">検索結果</h2>
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <img
                  src={user.profile_image}
                  alt={user.display_name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white">{user.display_name}</span>
              </div>
              <FriendshipButton 
                user={user}
                onSendRequest={() => handleSendRequest(user.clerk_id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}