"use client";

import { useState } from "react";
import { User } from "types/type";

import { Button } from "@/_components/shadcn_ui/button";
import { Input } from "@/_components/shadcn_ui/input";
import { client } from "@/utils/client";
import { useAuth } from "@clerk/nextjs"; // useAuthフックをインポート

export default function UserSearch() {

  const { userId } = useAuth(); // useAuthフックを使用してユーザーIDを取得

  const [query, setQuery] = useState("");
  const [loading] = useState(false);
  const [sending] = useState<string | null>(null); // 数値型に修正

  const [users, setUsers] = useState<User[]>([]);


  //友達検索機能
  const searchUsers = async () => {
    const friendsClerkId = "user_2wGRgmGQeZWbMXPg9axVbwsNsPg";
    const res = await client.api.friendRequest.search.$get({
      query: { clerk_id: friendsClerkId },
    });

    const friendsData = (await res.json()) as User[];


    console.log("友達検索の結果" + friendsData);
    setUsers(friendsData);
  };

  //友達申請機能
  const sendFriendRequest = async (friendsClerkId: string) => {
    try {
      console.log("友達申請を送信します自分のid:" + userId);
      console.log("友達申請を送信します友達のid:" + friendsClerkId);
  
      const res = await client.api.friendRequest.sendRequest.$post({
        json: { myClerkId: userId, friendsClerkId }, // bodyをjsonに変更
      });
      
      if (!res.ok) {
        throw new Error("友達申請に失敗しました");
      }
      
      console.log("友達申請を行いました。");
    } catch (error) {
      console.error("友達申請エラー:", error);
    }
  };

  return (
    <div className="space-y-4 p-16">
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

      <div className="space-y-2 ">
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
            <Button
              onClick={() => sendFriendRequest(user.clerk_id)}
              variant="outline"
              disabled={sending === user.clerk_id}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
            >
              {sending === user.clerk_id ? "送信中..." : "友達申請を送信"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
