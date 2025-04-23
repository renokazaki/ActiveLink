import { ActivityTabs } from "@/_components/manual_ui/activity_parts/ActivityTabs";
import { PageHeader } from "@/_components/manual_ui/activity_parts/PageHeader";
import { client } from "@/utils/client";
import { User } from "types/type";

export default async function FriendsInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // idを数値に変換するのではなく、文字列のまま渡す
  const res = await client.api.user.friends[":id"].$get({
    param: { id: id },
  });

  const friendsData = (await res.json()) as User;

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
