import { SkeletonCard } from '@/_components/manual_ui/SkeltonCard';
import UserData from '@/app/(Pages)/(user)/UserData';
import { Suspense } from 'react';

export default function AuthenticatedHome({ userId }: { userId: string }) {
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
