import { auth } from "@clerk/nextjs/server";
import { client } from "@/utils/client";
import { User } from "types/type";
import { redirect } from "next/navigation";

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
      <div className="text-white mt-12">
        <h1>こんにちは {userData.display_name}さん</h1>
        <p>目標: {userData.target}</p>
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
