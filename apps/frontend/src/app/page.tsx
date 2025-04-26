import { auth } from "@clerk/nextjs/server";
import { client } from "@/utils/client";
import { User } from "types/type";
import { redirect } from "next/navigation";
import { ActivityTabs } from "@/_components/manual_ui/activity_parts/ActivityTabs";
import { PageHeader } from "@/_components/manual_ui/activity_parts/PageHeader";
import ActiveButton from "@/_components/manual_ui/activity_parts/activityButton/ActiveButton";

export default async function Home() {
  // Clerkのauth関数を使って認証情報を取得
  const { userId } = await auth();

  // ユーザーIDがない場合はログインページにリダイレクト
  if (!userId) {
    redirect("/sign-in");
  }

  try {
    // clerk_idを使ってAPIからユーザーデータを取得
    const res = await client.api.user.$get({
      param: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const userData = (await res.json()) as User;

    return (
      <div className="min-h-screen text-white">
        <div className="container mx-auto py-8 px-4 space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"></div>
          <PageHeader>{userData.display_name}</PageHeader>
          <ActiveButton userId={userId} />
          <ActivityTabs data={userData} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("ユーザーデータ取得エラー:", error);

    return (
      <div className="text-white mt-12">
        <h1>エラーが発生しました</h1>
        <p>ユーザーデータの取得中に問題が発生しました。</p>
      </div>
    );
  }
}
