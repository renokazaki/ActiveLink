// ステータスの列挙型
export type WeeklyTargetStatus = "pending" | "started" | "completed";
export type FriendshipStatus = "pending" | "accepted" | "rejected";

// ユーザーモデル
export type User = {
  id: number;
  display_name: string;
  profile_image: string;
  target: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  // リレーション（オプション）
  activities?: Activity[];
  weekly_targets?: WeeklyTarget[];
  sent_friendships?: Friendship[];
  received_friendships?: Friendship[];
};

// 活動モデル
export type Activity = {
  id: number;
  user_id: number;
  activity_date: Date;
  created_at: Date;
  updated_at: Date;

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
  created_at: Date;
  updated_at: Date;

  // リレーション（オプション）
  activity?: Activity;
};

// 週間目標モデル
export type WeeklyTarget = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  target_start_date: Date;
  target_end_date: Date;
  actual_start_date: Date | null;
  actual_end_date: Date | null;
  status: WeeklyTargetStatus;
  created_at: Date;
  updated_at: Date;

  // リレーション（オプション）
  user?: User;
};

// 友達関係モデル
export type Friendship = {
  id: number;
  sender_id: number;
  receiver_id: number;
  status: FriendshipStatus;
  created_at: Date;
  updated_at: Date;

  // リレーション（オプション）
  sender?: User;
  receiver?: User;
};

// APIレスポンス用の集計データ型
export type UserStats = {
  total_activities: number;
  total_activity_minutes: number;
  activities_this_week: number;
  activities_this_month: number;
  current_streak: number;
  longest_streak: number;
};

// フロントエンド表示用の拡張型
export type UserWithStats = User & {
  stats: UserStats;
  friends: User[];
  pending_friend_requests: Friendship[];
};

// フロントエンドのアクティビティ表示用
export type ActivityWithDetails = Activity & {
  total_duration: number;
  details: ActivityDetail[];
};
