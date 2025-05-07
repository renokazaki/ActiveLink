import { ActivityTabs } from "@/_components/manual_ui/activity_parts/ActivityTabs";
import { PageHeader } from "@/_components/manual_ui/activity_parts/PageHeader";
import { client } from "@/utils/client";
import { User } from "types/type";

export default async function FriendsInfo({
  params,
}: {
  params: Promise<{ clerk_id: string }>;
}) {
  const { clerk_id } = await params;

  const res = await client.api.user.friends[":clerk_id"].$get({
    param: { clerk_id: clerk_id },
  });

  const friendsData = (await res.json()) as User;
  console.log(
    "フレンド詳細ページ - 取得したユーザー:",
    friendsData.display_name,
    friendsData.clerk_id
  );

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"></div>
        <PageHeader>{friendsData.display_name}</PageHeader>
        <ActivityTabs data={friendsData} />
      </div>
    </div>
  );
}
