import { ActivityTabs } from '@/_components/manual_ui/activity_parts/ActivityTabs';
import { PageHeader } from '@/_components/manual_ui/activity_parts/PageHeader';
import ActiveButton from '@/_components/manual_ui/activity_parts/activityButton/ActiveButton';
import { Suspense } from 'react';
import { SkeletonCard, SkeletonTab } from '../../../_components/manual_ui/SkeltonCard';
import { getUserData } from './function';
import { User } from 'types/type';

export default async function UserData({ userId }: { userId: string }) {
  const userData = (await getUserData(userId)) as User;

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
}
