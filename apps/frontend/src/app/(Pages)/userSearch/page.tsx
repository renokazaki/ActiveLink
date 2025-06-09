import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import UserSearchClient from './userSearch';
import PendingRequestsList from './pendingRequestList';
import { getPendingRequests } from './function';

export default async function UserSearchPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const initialPendingRequests = await getPendingRequests(userId);

  return (
    <div className="space-y-8 p-16">
      {/* 検索機能（クライアントコンポーネント） */}
      <UserSearchClient userId={userId} />

      {/* UserID表示（SSR） */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-blue-400">
        <h2 className="text-xl font-semibold text-white">あなたのUserID</h2>
      </div>
      <div className="space-y-4">
        <p className="text-white">{userId}</p>
      </div>

      {/* 友達申請状況（SSR + 部分的にクライアント） */}
      <PendingRequestsList 
        initialRequests={initialPendingRequests} 
        userId={userId} 
      />
    </div>
  );
}