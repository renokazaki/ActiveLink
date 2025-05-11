import { client } from "@/utils/client";
import { User, WeeklyTarget } from "types/type";
import { Card, CardContent } from "@/_components/shadcn_ui/card";

export async function FriendWeeklyTargets({ data }: { data: User }) {
  // clerk_idを使ってAPIからユーザーデータを取得
  const res = await client.api.weeklyTarget.$get({
    query: { clerk_id: data.clerk_id },
  });

  if (!res.ok) {
    throw new Error(`APIエラー: ${res.status}`);
  }

  const weeklyTargets = (await res.json()) as WeeklyTarget[];
  const hasWeeklyTargets = weeklyTargets && weeklyTargets.length > 0;

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      month: "short",
      day: "numeric",
    });
  };


  return (
    <div className="space-y-6">
      {hasWeeklyTargets ? (
        // 週間目標がある場合はリスト表示
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">週間目標</h2>

          {weeklyTargets.map((target, index) => {
            return (
              <Card
                key={target.id}
                className="bg-slate-800/30 border border-slate-700/50 shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-900/20">
                        <span className="text-xs font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {target.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {target.description}
                        </p>
                      </div>
                    </div>
                    
                    <div
                      className={`px-2 py-1 rounded-full text-xs ${
                        target.status === "completed"
                          ? "bg-green-500/20 text-green-300"
                          : target.status === "started"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      
                      {target.status === "completed"
                        ? "完了"
                        : target.status === "started"
                        ? "進行中"
                        : "未開始"}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-2">
                    <span className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full  mr-1.5`}></div>
                      開始: {formatDate(target.target_start_date.toString())}
                    </span>
                    <div className="flex items-center bg-slate-900/50 px-2 py-1 rounded-full"></div>
                    <span className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-1.5`}></div>
                      期限: {formatDate(target.target_end_date.toString())}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        // 週間目標がない場合は登録フォームを表示
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">
            週間目標が設定されていません
          </h2>
          <p className="text-slate-400 mb-6">目標が設定されてません。</p>
        </div>
      )}

     
    </div>
  );
}