// app/friends/page.tsx
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/_components/shadcn_ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import FriendsData from "./FriendsData";
import { SkeletonCard } from "@/_components/manual_ui/SkeltonCard";

export default async function Friends() {
  // Clerkから認証情報を取得
  const { userId } = await auth();

  // ユーザーIDがない場合はログインページにリダイレクト
  if (!userId) {
    redirect("/sign-in");
  }

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
        
        <Suspense fallback={<SkeletonCard />}>
          <FriendsData userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}