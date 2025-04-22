"use client";

import { useState } from "react";
import { User } from "types/type";

import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [sending, setSending] = useState<string | null>(null);
  const [loading] = useState(false);
  const [sending] = useState<number | null>(null); // 数値型に修正

  //const [users, setUsers] = useState<User[]>([

  const [users] = useState<User[]>([
    {
      id: 1,
      display_name: "山田太郎",
      profile_image: "/placeholder.svg?height=40&width=40",
      target: "毎日30分の読書習慣をつける",
      is_active: true,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      display_name: "鈴木花子",
      profile_image: "/placeholder.svg?height=40&width=40",
      target: "週3回のジョギングを継続する",
      is_active: false,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
    {
      id: 3,
      display_name: "佐藤健太",
      profile_image: "/placeholder.svg?height=40&width=40",
      target: "プログラミングスキルを向上させる",
      is_active: true,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
  ]);

  const searchUsers = () => {
    console.log("ユーザー検索します" + query);
  };

  const sendFriendRequest = (userId: number) => {
    // 数値型に修正
    console.log("友達申請を送信します" + userId);
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
              onClick={() => sendFriendRequest(user.id)}
              variant="outline"
              disabled={sending === user.id}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
            >
              {sending === user.id ? "送信中..." : "友達申請を送信"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
