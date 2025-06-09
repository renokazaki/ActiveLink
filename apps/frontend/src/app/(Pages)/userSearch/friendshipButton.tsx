'use client';

import { useState } from 'react';
import { Button } from '@/_components/shadcn_ui/button';

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
  user: UserWithFriendship;
  onSendRequest: () => Promise<void>;
}

export default function FriendshipButton({ user, onSendRequest }: Props) {
  const [sending, setSending] = useState(false);

  const handleSendRequest = async () => {
    setSending(true);
    try {
      await onSendRequest();
    } finally {
      setSending(false);
    }
  };

  // 友達関係がない場合
  if (!user.friendship) {
    return (
      <Button
        onClick={handleSendRequest}
        variant="outline"
        disabled={sending}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
      >
        {sending ? '送信中...' : '申請'}
      </Button>
    );
  }

  // ステータスが accepted の場合
  if (user.friendship.status === 'accepted') {
    return (
      <Button
        variant="outline"
        disabled
        className="bg-green-500/20 text-green-600 border-green-500"
      >
        友達
      </Button>
    );
  }

  // ステータスが pending の場合
  if (user.friendship.status === 'pending') {
    if (user.friendship.is_sender) {
      return (
        <Button
          variant="outline"
          disabled
          className="bg-yellow-500/20 text-yellow-600 border-yellow-500"
        >
          申請済み
        </Button>
      );
    } else {
      return (
        <Button variant="outline" disabled className="bg-blue-500/20 text-blue-600 border-blue-500">
          リクエスト待ち
        </Button>
      );
    }
  }

  return null;
}
