'use client';

import { useState } from 'react';
import { Button } from '@/_components/shadcn_ui/button';
import { toast } from 'sonner';
import { respondToRequest } from './function';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  clerk_id: string;
  display_name: string;
  profile_image: string;
}

interface FriendRequest {
  id: number;
  sender_clerk_id: string;
  receiver_clerk_id: string;
  status: string;
  created_at: string;
  sender: User;
  receiver: User;
}

interface Props {
  request: FriendRequest;
  userId: string;
}

export default function PendingRequestItem({ request, userId }: Props) {
  const [responding, setResponding] = useState(false);
  const router = useRouter();

  const isSender = request.sender_clerk_id === userId;
  const otherUser = isSender ? request.receiver : request.sender;
  const statusText = isSender ? '申請中' : 'リクエスト';
  const statusClass = isSender
    ? 'bg-yellow-500/20 text-yellow-600'
    : 'bg-blue-500/20 text-blue-600';

  const handleRespond = async (action: 'accept' | 'reject') => {
    setResponding(true);
    try {
      await respondToRequest(request.id, action);
      
      const message = action === 'accept' ? '友達申請を承認しました' : '友達申請を拒否しました';
      toast.success(message);
      
      // ページを再読み込みして最新の状態を取得
      router.refresh();
    } catch (error) {
      console.error('友達申請処理エラー:', error);
      const errorMessage = action === 'accept' ? '承認に失敗しました' : '拒否に失敗しました';
      toast.error(errorMessage);
    } finally {
      setResponding(false);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow p-4 text-black">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        {/* ユーザー情報とステータス部分（左側） */}
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <img
            src={otherUser.profile_image}
            alt={otherUser.display_name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <h3 className="font-medium">{otherUser.display_name}</h3>
            <div className={`px-3 py-1 rounded-full text-sm ${statusClass}`}>{statusText}</div>
          </div>
        </div>

        {/* ボタン部分（右側） */}
        <div className="flex items-center justify-end">
          {!isSender ? (
            // 自分が受信者の場合に承認・拒否ボタンを表示
            <div className="flex space-x-2 w-full justify-end">
              <Button
                onClick={() => handleRespond('reject')}
                disabled={responding}
                size="sm"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                {responding ? '処理中...' : '拒否'}
              </Button>
              <Button
                onClick={() => handleRespond('accept')}
                disabled={responding}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {responding ? '処理中...' : '承認'}
              </Button>
            </div>
          ) : (
            // 自分が送信者の場合にキャンセルボタンを表示
            <Button
              onClick={() => handleRespond('reject')}
              disabled={responding}
              size="sm"
              className="bg-gray-500 hover:bg-gray-600 text-white"
            >
              {responding ? '処理中...' : 'キャンセル'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}