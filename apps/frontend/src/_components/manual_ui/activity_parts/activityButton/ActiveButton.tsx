"use client";
import { Button } from "@/_components/shadcn_ui/button";
import { startActivity } from "./action";
import { toast } from "sonner";
export default function ActiveButton({ userId }: { userId: string }) {


  return (
    <div className="flex flex-col items-center justify-center bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
      <p>活動時間はカレンダーの日付から登録</p>
      <div className="flex flex-col justify-center items-center">
        <Button
          onClick={() => {
            startActivity(userId);
            toast.success("今日の活動を登録しました");
          }}
          className="bg-green-500 hover:bg-green-600"
        >
          今日の活動を登録
        </Button>
      </div>
    </div>
  );
}
