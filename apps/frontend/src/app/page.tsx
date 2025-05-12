// app/page.tsx
import { SkeletonCard } from "@/_components/manual_ui/SkeltonCard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import UserData from "./(Pages)/(user)/UserData";

export default async function Home() {
  // Clerkのauth関数を使って認証情報を取得
  const { userId } = await auth();

  // ユーザーIDがない場合はログインページにリダイレクト
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"></div>
        <Suspense fallback={<SkeletonCard />}>
          <UserData userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}