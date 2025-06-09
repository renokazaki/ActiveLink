import { ActivityTabs } from '@/_components/manual_ui/activity_parts/ActivityTabs';
import { PageHeader } from '@/_components/manual_ui/activity_parts/PageHeader';
import { User } from 'types/type';
import { getFriendsData } from '../function';
import { Suspense } from 'react';
import { SkeletonCard } from '@/_components/manual_ui/SkeltonCard';

export default async function FriendsInfo({ params }: { params: Promise<{ clerk_id: string }> }) {
  const { clerk_id } = await params;

  const friendsData = (await getFriendsData(clerk_id)) as User;

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto py-16 px-4 space-y-8">
        <Suspense fallback={<SkeletonCard />}>
          <PageHeader>{friendsData.display_name}</PageHeader>
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <ActivityTabs data={friendsData} />
        </Suspense>
      </div>
    </div>
  );
}
