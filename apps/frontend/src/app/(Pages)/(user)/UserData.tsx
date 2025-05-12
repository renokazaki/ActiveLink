// @/_components/UserData.tsx
import { client } from "@/utils/client";
import { User } from "types/type";
import { ActivityTabs } from "@/_components/manual_ui/activity_parts/ActivityTabs";
import { PageHeader } from "@/_components/manual_ui/activity_parts/PageHeader";
import ActiveButton from "@/_components/manual_ui/activity_parts/activityButton/ActiveButton";
import { Suspense } from "react";
import { SkeletonCard, SkeletonTab } from "../../../_components/manual_ui/SkeltonCard";

interface UserDataProps {
  userId: string;
}

export default async function UserData({ userId }: UserDataProps) {
  try {
    // clerk_idを使ってAPIからユーザーデータを取得
    const res = await client.api.user.$get({
      query: { clerk_id: userId },
    });

    if (!res.ok) {
      throw new Error(`APIエラー: ${res.status}`);
    }

    const userData = (await res.json()) as User;

    return (
      <>
        <Suspense fallback={<SkeletonCard />}>
          <PageHeader>{userData.display_name}</PageHeader>
        </Suspense>
        
        <Suspense fallback={<SkeletonCard />}>
          <ActiveButton userId={userId} />
        </Suspense>
        
        <Suspense fallback={<SkeletonTab />}>
          <ActivityTabs data={userData} />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("ユーザーデータ取得エラー:", error);
    
    return (
      <div className="text-white mt-4">
        <h2>エラーが発生しました</h2>
        <p>ユーザーデータの取得中に問題が発生しました。</p>
      </div>
    );
  }
}