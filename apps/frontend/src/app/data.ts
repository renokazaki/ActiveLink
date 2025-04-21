import {
  User,
  Activity,
  WeeklyTarget,
  WeeklyTargetStatus,
  Friendship,
  UserStats,
} from "types/type";

// 活動データを生成する関数
const generateActivityData = (userId: number, seed: number): Activity[] => {
  const activities: Activity[] = [];
  const today = new Date();

  // 過去90日分のデータを生成
  for (let i = 90; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // seedを使って友達ごとにバリエーションを作る
    const baseValue = Math.sin(i * 0.1) * 5 + 5; // 波のパターンを作る
    const randomFactor = Math.random() * 2 - 1; // -1から1の間のランダム値
    const seedFactor = (seed % 5) * 0.5; // seedに基づいた異なるパターン

    // ランダム性とseedの影響を含めた値を計算
    let value = Math.round(baseValue + randomFactor * 3 + seedFactor);

    // 値が0から10の間になるようにする
    value = Math.max(0, Math.min(10, value));

    const activity: Activity = {
      id: i,
      user_id: userId,
      activity_date: date,
      created_at: date,
      updated_at: date,
      activity_details: [
        {
          id: i,
          activity_id: i,
          description: `Activity ${i}`,
          duration_minutes: value * 10, // 0-100分の範囲
          category: ["運動", "読書", "勉強", "趣味"][i % 4],
          created_at: date,
          updated_at: date,
        },
      ],
    };

    activities.push(activity);
  }

  return activities;
};

// ユーザー統計情報を計算する関数
const calculateUserStats = (
  activities: Activity[],
  seed: number
): UserStats => {
  // 今週の活動数を計算
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const activitiesThisWeek = activities.filter(
    (activity) => activity.activity_date >= startOfWeek
  ).length;

  // 今月の活動数を計算
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const activitiesThisMonth = activities.filter(
    (activity) => activity.activity_date >= startOfMonth
  ).length;

  // 総活動時間を計算
  const totalActivityMinutes = activities.reduce((total, activity) => {
    const detailsMinutes =
      activity.activity_details?.reduce(
        (sum, detail) => sum + detail.duration_minutes,
        0
      ) || 0;
    return total + detailsMinutes;
  }, 0);

  // seedに基づいて値を調整（ばらつきを出すため）
  const streakAdjust = seed % 10;

  return {
    total_activities: activities.length,
    total_activity_minutes: totalActivityMinutes,
    activities_this_week: activitiesThisWeek,
    activities_this_month: activitiesThisMonth,
    current_streak: 3 + streakAdjust,
    longest_streak: 10 + streakAdjust * 2,
  };
};

// 週間目標データを生成する関数
const generateWeeklyTargets = (userId: number): WeeklyTarget[] => {
  const today = new Date();
  const statuses: WeeklyTargetStatus[] = ["pending", "started", "completed"];

  return [
    {
      id: 1,
      user_id: userId,
      title: "ウィークリーランニング",
      description: "週に3回、30分間のランニングを行う",
      target_start_date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      ),
      target_end_date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 1
      ),
      actual_start_date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      ),
      actual_end_date: null,
      status: statuses[userId % 3],
      created_at: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 10
      ),
      updated_at: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 2
      ),
    },
  ];
};

// 友達関係データを生成する関数
const generateFriendships = (
  userId: number,
  friends: number[]
): Friendship[] => {
  const today = new Date();
  return friends.map((friendId, index) => ({
    id: userId * 100 + friendId,
    sender_id: userId < friendId ? userId : friendId,
    receiver_id: userId < friendId ? friendId : userId,
    status: "accepted",
    created_at: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 30 + index
    ),
    updated_at: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 25 + index
    ),
  }));
};

// 修正済みの友達データ
export const friendsData: User[] = [
  {
    id: 1,
    display_name: "Alex Johnson",
    profile_image: "/assets/profiles/alex.jpg", // 仮のパス
    target: "毎日30分の読書を習慣にする",
    is_active: true,
    created_at: new Date("2023-01-15"),
    updated_at: new Date("2024-03-20"),
    activities: generateActivityData(1, 1),
    weekly_targets: generateWeeklyTargets(1),
    sent_friendships: generateFriendships(1, [2, 3]),
    received_friendships: generateFriendships(1, [4, 5]),
  },
  {
    id: 2,
    display_name: "Taylor Smith",
    profile_image: "/assets/profiles/taylor.jpg",
    target: "週3回のジョギングを継続する",
    is_active: false,
    created_at: new Date("2023-02-10"),
    updated_at: new Date("2024-03-15"),
    activities: generateActivityData(2, 2),
    weekly_targets: generateWeeklyTargets(2),
    sent_friendships: generateFriendships(2, [1, 3]),
    received_friendships: generateFriendships(2, [4, 5]),
  },
  {
    id: 3,
    display_name: "Jordan Lee",
    profile_image: "/assets/profiles/jordan.jpg",
    target: "毎日のストレッチと瞑想を習慣化する",
    is_active: true,
    created_at: new Date("2023-01-20"),
    updated_at: new Date("2024-03-19"),
    activities: generateActivityData(3, 3),
    weekly_targets: generateWeeklyTargets(3),
    sent_friendships: generateFriendships(3, [1, 2]),
    received_friendships: generateFriendships(3, [4, 5]),
  },
  {
    id: 4,
    display_name: "Casey Morgan",
    profile_image: "/assets/profiles/casey.jpg",
    target: "プログラミングスキルを向上させる",
    is_active: false,
    created_at: new Date("2023-03-05"),
    updated_at: new Date("2024-03-10"),
    activities: generateActivityData(4, 4),
    weekly_targets: generateWeeklyTargets(4),
    sent_friendships: generateFriendships(4, [1, 2]),
    received_friendships: generateFriendships(4, [3, 5]),
  },
  {
    id: 5,
    display_name: "Riley Parker",
    profile_image: "/assets/profiles/riley.jpg",
    target: "週5回の筋トレを継続する",
    is_active: true,
    created_at: new Date("2023-02-25"),
    updated_at: new Date("2024-03-18"),
    activities: generateActivityData(5, 5),
    weekly_targets: generateWeeklyTargets(5),
    sent_friendships: generateFriendships(5, [1, 2]),
    received_friendships: generateFriendships(5, [3, 4]),
  },
];

// フロントエンド表示用の拡張データを取得する関数
export const getUserWithStats = (
  userId: number
): User & { stats: UserStats } => {
  const user = friendsData.find((user) => user.id === userId);
  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  const stats = calculateUserStats(user.activities || [], userId);

  return {
    ...user,
    stats,
  };
};

// フロントエンド用の友達リスト取得関数
export const getUserFriends = (userId: number): User[] => {
  const user = friendsData.find((user) => user.id === userId);
  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  const friendIds = new Set<number>();

  // 送信した友達申請（承認済み）
  user.sent_friendships?.forEach((friendship) => {
    if (friendship.status === "accepted") {
      friendIds.add(friendship.receiver_id);
    }
  });

  // 受信した友達申請（承認済み）
  user.received_friendships?.forEach((friendship) => {
    if (friendship.status === "accepted") {
      friendIds.add(friendship.sender_id);
    }
  });

  // 友達リストを取得
  return friendsData.filter((friend) => friendIds.has(friend.id));
};

// 未承認の友達申請リスト取得関数
export const getPendingFriendRequests = (userId: number): Friendship[] => {
  const user = friendsData.find((user) => user.id === userId);
  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  // 受信した友達申請のうち、pending状態のものを返す
  return (
    user.received_friendships?.filter(
      (friendship) => friendship.status === "pending"
    ) || []
  );
};

// アクティビティ詳細付きのデータを取得する関数
export const getActivitiesWithDetails = (userId: number): Activity[] => {
  const user = friendsData.find((user) => user.id === userId);
  if (!user || !user.activities) {
    return [];
  }

  return user.activities;
};
