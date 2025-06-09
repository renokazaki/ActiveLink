import { Friendship } from 'types/type';
import PendingRequestItem from './pendingRequestItem';

export default function PendingRequestsList({
  initialRequests,
  userId,
}: {
  initialRequests: Friendship[];
  userId: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-blue-400">
        <h2 className="text-xl font-semibold text-white">友達申請状況</h2>
      </div>
      <div className="space-y-4">
        {initialRequests.length > 0 ? (
          initialRequests.map(request => (
            <PendingRequestItem key={request.id} request={request} userId={userId} />
          ))
        ) : (
          <div className="text-white">保留中の申請はありません</div>
        )}
      </div>
    </div>
  );
}
