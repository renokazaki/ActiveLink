// ステータスの列挙型
export type FriendshipStatus = "pending" | "accepted" | "rejected";

// ユーザーモデル
export type User = {
  id: number;
  clerk_id: string;
  display_name: string;
  profile_image: string;
  created_at: string;
  updated_at: string;

  // リレーション（オプション）
  activities?: Activity[];
  sent_friendships?: Friendship[];
  received_friendships?: Friendship[];
};

// 活動モデル
export type Activity = {
  id: number;
  user_clerk_id: string;
  activity_date: string;
  created_at: string;
  updated_at: string;

  // リレーション（オプション）
  user?: User;
  activity_details?: ActivityDetail[];
};

// 活動詳細モデル
export type ActivityDetail = {
  id: number;
  activity_id: number;
  description: string;
  duration_minutes: number;
  category: string;
  created_at: string;
  updated_at: string;

  // リレーション（オプション）
  activity?: Activity;
};



// 友達関係モデル
export type Friendship = {
  id: number;
  sender_clerk_id: string;
  receiver_clerk_id: string;
  status: FriendshipStatus;
  created_at: string;
  updated_at: string;

  // リレーション（オプション）
  sender?: User;
  receiver?: User;
};



