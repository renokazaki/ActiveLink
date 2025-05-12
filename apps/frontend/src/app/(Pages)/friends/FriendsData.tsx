// app/friends/_components/FriendsData.tsx
import Link from "next/link";
import { client } from "@/utils/client";
import { User } from "types/type";
import DeleteButton from "./deleteButton";

interface FriendsDataProps {
  userId: string;
}

export default async function FriendsData({ userId }: FriendsDataProps) {
  try {
    // ログイン中のユーザーのfriendデータを取得
    const res = await client.api.user.allFriends.$get({
      query: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const friendsData = (await res.json()) as User[];

    if (friendsData && friendsData.length > 0) {
      return (
        <div className="grid gap-4">
          {friendsData.map((friend) => (
            <div 
              key={friend.id} 
              className="bg-gray-100 rounded-lg shadow p-4 flex items-center justify-between text-black"
            >
              <Link
                href={`/friends/${friend.clerk_id}`}
                className="flex-grow flex items-center hover:text-blue-500 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={friend.profile_image}
                    alt={friend.display_name}
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="font-medium">{friend.display_name}</h3>
                </div>
              </Link>
              <DeleteButton
                friendClerkId={friend.clerk_id}
                myClerkId={userId}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return <div className="text-white">友達がいません</div>;
    }
  } catch (error) {
    console.error("友達データ取得エラー:", error);
    return <div className="text-white">データの取得中にエラーが発生しました。</div>;
  }
}