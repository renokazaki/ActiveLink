"use client";
import { Button } from "@/_components/shadcn_ui/button";
import { useState } from "react";

export default function ActiveButton() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleActivity = () => {
    setIsActive(!isActive);
    // TODO: ここでAPIを呼び出して活動状態を投稿する
  };
  return (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4">現在の状態: {isActive ? "活動中" : "休止中"}</p>
        <Button
          onClick={handleToggleActivity}
          className={isActive ? "bg-red-500" : "bg-green-500"}
        >
          {isActive ? "活動を終了" : "活動を開始"}
        </Button>
      </div>
    </div>
  );
}
