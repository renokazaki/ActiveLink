import Link from "next/link";

import { Plus } from "lucide-react";
import { Button } from "@/_components/ui/button";
// import { client } from "@/utils/client";
// import { User } from "types/type";

export default async function Friends() {
  // const res = await client.api.user.allFriends.$get();
  // const friendsData = (await res.json()) as User[];
  // User型の配列に修正

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
        {/* <div className="grid gap-4">
          {friendsData &&
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
                      {friend.is_active ? (
                        <span>活動中</span>
                      ) : (
                        <span>
                          最終活動:{" "}
                          {new Date(friend.updated_at).toLocaleDateString()}
                        </span>
                      )}
                    </p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      friend.is_active ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                </div>
              </Link>
            ))}
        </div> */}
      </div>
    </div>
  );
}
