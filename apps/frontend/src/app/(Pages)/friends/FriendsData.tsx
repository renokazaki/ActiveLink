"use server"
import Link from 'next/link';
import DeleteButton from './deleteButton';
import { getFriends } from './function';
import { User } from 'types/type';

export default async function FriendsData({ userId }: {userId:string}) {
  const friendsData = await getFriends(userId) as User[];

    if (friendsData && friendsData.length > 0) {
      return (
        <div className="grid gap-4">
          {friendsData.map(friend => (
            <div
              key={friend.id}
              className="bg-gray-100 rounded-lg shadow p-4 flex items-center justify-between text-black"
            >
              <Link
                href={`/friends/${friend.clerk_id}`}
                className="flex-grow flex items-center hover:text-blue-500 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={friend.profile_image}
                    alt={friend.display_name}
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="font-medium">{friend.display_name}</h3>
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
