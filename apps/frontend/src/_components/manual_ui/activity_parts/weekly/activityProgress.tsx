// import { client } from "@/utils/client";
import { Clock } from "lucide-react";
import { User, WeeklyTarget } from "types/type";

export async function WeeklyProgress({ data }: { data: User }) {
  // try {
  //   // clerk_idを使ってAPIからユーザーデータを取得
  //   const res = await client.api.user.weeklyTarget.$get({
  //     param: { user_id: data.id },
  //   });

  //   if (!res.ok) {
  //     throw new Error(`APIエラー: ${res.status}`);
  //   }

  //   const weeklyTarget = (await res.json()) as WeeklyTarget[];
  const weeklyTarget = [] as WeeklyTarget[];

  // 日付をフォーマットする関数
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ja-JP", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      {weeklyTarget.map((target, index) => {
        // 日数の計算
        const startDate = new Date(target.target_start_date);
        const endDate = new Date(target.target_end_date);
        const today = new Date();
        const totalDays = Math.ceil(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const daysElapsed = Math.ceil(
          (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const daysRemaining = Math.max(0, totalDays - daysElapsed);

        // 進捗状況に応じたステータスの色を設定
        let statusColor = "bg-blue-500";
        if (target.status === "completed") {
          statusColor = "bg-green-500";
        } else if (target.status === "pending") {
          statusColor = "bg-yellow-500";
        }

        return (
          <div
            key={index}
            className="space-y-3 bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-900/20`}
                >
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{target.title}</h3>
                  <p className="text-sm text-slate-400">{target.description}</p>
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
                <div
                  className={`w-1.5 h-1.5 rounded-full ${statusColor} mr-1.5`}
                ></div>
                開始: {formatDate(target.target_start_date)}
              </span>
              <div className="flex items-center bg-slate-900/50 px-2 py-1 rounded-full">
                <Clock className="h-3 w-3 text-slate-400 mr-1" />
                <span className="text-slate-300">残り {daysRemaining} 日</span>
              </div>
              <span className="flex items-center">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${statusColor} mr-1.5`}
                ></div>
                期限: {formatDate(target.target_end_date)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
