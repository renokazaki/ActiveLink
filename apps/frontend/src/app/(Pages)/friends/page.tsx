import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/_components/shadcn_ui/button";
import { client } from "@/utils/client";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { User } from "types/type";

export default async function Friends() {
  // Clerkから認証情報を取得
  const { userId } = await auth();

  // ユーザーIDがない場合はログインページにリダイレクト
  if (!userId) {
    redirect("/sign-in");
  }

  try {
    // ログイン中のユーザーのfriendデータを取得
    const res = await client.api.user.allFriends.$get({
      query: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const friendsData = (await res.json()) as User[];

    return (
      <div className="text-black min-h-screen">
        <div className="container mx-auto py-8 px-4 space-y-8 mt-12">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-blue-400">
            <h1 className="text-2xl font-bold text-white">友達一覧</h1>
            <Link href="/userSearch">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                友達を追加
              </Button>
            </Link>
          </div>
          <div className="grid gap-4">
            {friendsData && friendsData.length > 0 ? (
              friendsData.map((friend) => (
                <Link
                  key={friend.id}
                  href={`/friends/${friend.id}`}
                  className="block"
                >
                  <div className="bg-gray-100 rounded-lg shadow p-4 flex items-center justify-between hover:bg-blue-500 transition-colors text-black">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src={friend.profile_image}
                          alt={friend.display_name}
                          className="w-10 h-10 rounded-full"
                        />
                        <h3 className="font-medium">{friend.display_name}</h3>
                      </div>
                      <p className="text-sm text-gray-500">
                        <span>
                          最終活動:
                          {new Date(friend.updated_at).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-white">友達がいません</div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("友達データ取得エラー:", error);

    return (
      <div className="text-white min-h-screen">
        <div className="container mx-auto py-8 px-4 space-y-8 mt-12">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-blue-400">
            <h1 className="text-2xl font-bold">友達一覧</h1>
            <Link href="/userSearch">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                友達を追加
              </Button>
            </Link>
          </div>
          <div>データの取得中にエラーが発生しました。</div>
        </div>
      </div>
    );
  }
}
