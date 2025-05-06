"use client";

import { useState, useEffect } from "react";
import { User } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";
import { Input } from "@/_components/shadcn_ui/input";
import { client } from "@/utils/client";
import { useAuth } from "@clerk/nextjs";

// 拡張されたUserインターフェース
interface UserWithFriendship extends User {
  friendship?: {
    id: number;
    status: string;
    is_sender: boolean;
  } | null;
}

// 友達申請の型定義
interface FriendRequest {
  id: number;
  sender_clerk_id: string;
  receiver_clerk_id: string;
  status: string;
  created_at: string;
  sender: User;
  receiver: User;
}

export default function UserSearch() {
  const { userId } = useAuth();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState<string | null>(null);
  const [users, setUsers] = useState<UserWithFriendship[]>([]);
  const [pendingRequests, setPendingRequests] = useState<FriendRequest[]>([]);

  // コンポーネントがマウントされたときに保留中のリクエストを取得
  useEffect(() => {
    if (userId) {
      fetchPendingRequests();
    }
  }, [userId]);

  // 保留中の友達申請を取得する関数
  const fetchPendingRequests = async () => {
    if (!userId) return;
    
    try {
      const res = await client.api.friendRequest.pendingRequests.$get({
        query: { clerk_id: userId }
      });
      
      if (res.ok) {
        const data = (await res.json()) as FriendRequest[];
        setPendingRequests(data);
      }
    } catch (error) {
      console.error("保留中の友達申請の取得エラー:", error);
    }
  };

  // 友達検索機能
  const searchUsers = async () => {
    if (!query || !userId) return;
    
    setLoading(true);
    try {
      const res = await client.api.friendRequest.search.$get({
        query: {
          clerk_id: query,
          my_clerk_id: userId
        },
      });

      const friendsData = (await res.json()) as UserWithFriendship[];
      setUsers(friendsData);
      
    } catch (error) {
      console.error("検索エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  // 友達申請機能
  const sendFriendRequest = async (friendsClerkId: string) => {
    if (!userId) return;
    
    setSending(friendsClerkId);
    try {
      const res = await client.api.friendRequest.sendRequest.$post({
        json: { myClerkId: userId, friendsClerkId },
      });
      
      if (!res.ok) {
        throw new Error("友達申請に失敗しました");
      }
      
      // 申請成功後、ユーザーリストとペンディングリクエストを更新
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.clerk_id === friendsClerkId 
            ? {
                ...user,
                friendship: {
                  id: 0,
                  status: "pending",
                  is_sender: true
                }
              }
            : user
        )
      );
      
      // 保留中のリクエストを再取得
      fetchPendingRequests();
      
    } catch (error) {
      console.error("友達申請エラー:", error);
    } finally {
      setSending(null);
    }
  };

  // 友達関係に基づいたボタンを表示
  const renderFriendshipButton = (user: UserWithFriendship) => {
    // 友達関係がない場合
    if (!user.friendship) {
      return (
        <Button
          onClick={() => sendFriendRequest(user.clerk_id)}
          variant="outline"
          disabled={sending === user.clerk_id}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
        >
          {sending === user.clerk_id ? "送信中..." : "友達申請を送信"}
        </Button>
      );
    }

    // ステータスが accepted の場合
    if (user.friendship.status === "accepted") {
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
    if (user.friendship.status === "pending") {
      // 自分が送信者の場合
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
      } 
      // 自分が受信者の場合
      else {
        return (
          <Button
            variant="outline"
            disabled
            className="bg-blue-500/20 text-blue-600 border-blue-500"
          >
            リクエスト待ち
          </Button>
        );
      }
    }

    // その他の状態
    return (
      <Button
        onClick={() => sendFriendRequest(user.clerk_id)}
        variant="outline"
        className="bg-gray-500"
      >
        再申請
      </Button>
    );
  };

  // 友達申請状況を表示する関数
  const renderRequestStatus = (request: FriendRequest) => {
    // 自分が送信者かどうか
    const isSender = request.sender_clerk_id === userId;
    
    // 相手のユーザー情報
    const otherUser = isSender ? request.receiver : request.sender;
    
    // ステータスの表示
    const statusText = isSender ? "申請中" : "あなたの承認待ち";
    const statusClass = isSender 
      ? "bg-yellow-500/20 text-yellow-600" 
      : "bg-blue-500/20 text-blue-600";
    
    return (
      <div key={request.id} className="bg-gray-100 rounded-lg shadow p-4 flex items-center justify-between text-black">
        <div className="flex items-center gap-2">
          <img
            src={otherUser.profile_image}
            alt={otherUser.display_name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">{otherUser.display_name}</h3>
            <p className="text-sm text-gray-500">
              <span>
                最終活動: {new Date(otherUser.updated_at).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full ${statusClass}`}>
          {statusText}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 p-16">
      {/* 検索フォーム */}
      <div className="flex gap-2">
        <Input
          placeholder="ユーザー名を検索"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchUsers()}
        />
        <Button
          onClick={searchUsers}
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
        >
          {loading ? "検索中..." : "検索"}
        </Button>
      </div>

      {/* 検索結果 */}
      {users.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">検索結果</h2>
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-2">
                <img
                  src={user.profile_image}
                  alt={user.display_name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{user.display_name}</span>
              </div>
              {renderFriendshipButton(user)}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center mb-6 pb-2 border-b-2 border-blue-400">
      <h2 className="text-xl font-semibold text-white">あなたのUserID</h2>
      
          <p className="text-blue-500">
            {userId}
          </p>

      </div>
      {/* 友達申請状況 */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-blue-400">
          <h2 className="text-xl font-semibold text-white">友達申請状況</h2>
        </div>
        <div className="space-y-4">
          {pendingRequests.length > 0 ? (
            pendingRequests.map(request => renderRequestStatus(request))
          ) : (
            <div className="text-white">保留中の申請はありません</div>
          )}
        </div>
      </div>
    </div>
  );
}