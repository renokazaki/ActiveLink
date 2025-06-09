import Link from 'next/link';
import DeleteButton from './deleteButton';
import { getFriends, getFriendsWithActivity } from './function';
import { User } from 'types/type';

// フレンドの活動データを含む拡張型
type FriendWithActivity = User & {
  totalActivityDays: number;
  currentMonthActivityDays: number;
};

export default async function FriendsData({ userId }: { userId: string }) {
  const friendsData = (await getFriends(userId)) as User[];

  if (friendsData && friendsData.length > 0) {
    const friendsWithActivity = (await getFriendsWithActivity(friendsData)) as FriendWithActivity[];

    const sortedFriends = friendsWithActivity.sort((a, b) => {
      return b.totalActivityDays - a.totalActivityDays;
    });

    return (
      <div className="grid gap-4">
        {sortedFriends.map((friend, index) => (
          <div
            key={friend.id}
            className="bg-gray-100 rounded-lg shadow p-4 flex items-center justify-between text-black"
          >
            <Link
              href={`/friends/${friend.clerk_id}`}
              className="flex-grow flex items-center hover:text-blue-500 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 text-center font-bold text-blue-600">
                  {index + 1}
                </div>
                <img
                  src={friend.profile_image}
                  alt={friend.display_name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{friend.display_name}</h3>
                  <div className="text-xs text-gray-600 flex gap-3">
                    <span>累計: {friend.totalActivityDays}日</span>
                    <span>今月: {friend.currentMonthActivityDays}日</span>
                  </div>
                </div>
              </div>
            </Link>
            <DeleteButton friendClerkId={friend.clerk_id} myClerkId={userId} />
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="text-white">友達がいません</div>;
  }
}
