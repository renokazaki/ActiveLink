"use client";
import { client } from "@/utils/client";
import { Button } from "@/_components/shadcn_ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function ActiveButton({ userId }: { userId: string }) {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ISO-8601形式の日本時間を取得
  const getJapanTimeISOString = () => {
    const now = new Date();
    // 日本時間に調整（UTC+9時間）
    const jpTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return jpTime.toISOString();
  };

  const handleToggleActivity = async () => {
    if (!userId) {
      toast.error("ユーザー情報が取得できません");
      return;
    }

    setIsLoading(true);

    try {
      const newStatus = !isActive;

      if (newStatus) {
        // 活動開始
        const response = await client.api.activity.$post({
          json: {
            user_clerk_id: userId,
            activity_date: getJapanTimeISOString(),
          },
        });

        if (!response.ok) throw new Error("登録に失敗しました");

        toast.success("活動を開始しました！");
      } else {
        toast.success("活動を終了しました");
      }

      setIsActive(newStatus);
    } catch (error) {
      console.error("エラー:", error);
      toast.error("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4">現在の状態: {isActive ? "活動中" : "休止中"}</p>
        <Button
          onClick={handleToggleActivity}
          className={
            isActive
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }
          disabled={isLoading}
        >
          {isLoading ? "処理中..." : isActive ? "活動を終了" : "活動を開始"}
        </Button>
      </div>
    </div>
  );
}
