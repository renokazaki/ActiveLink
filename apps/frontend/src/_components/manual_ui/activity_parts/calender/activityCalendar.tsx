"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Star } from "lucide-react";
import { Activity } from "types/type";

export default function ActivityCalendar({
  activity,
}: {
  activity: Activity[];
}) {
  // 日付だけを抽出した単純なイベント配列を作成
  const events = activity.map((item) => ({
    // 最小限のプロパティだけを設定
    date: new Date(item.activity_date).toISOString().split("T")[0],
    display: "background",
    backgroundColor: "rgba(100, 50, 230)",
  }));

  const renderEventContent = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Star className="h-5 w-5 text-white" />
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "today next",
        }}
        events={events}
        eventContent={renderEventContent}
        height="auto"
        contentHeight="auto"
        fixedWeekCount={false} // これにより月の実際の週数に合わせてカレンダーが表示されます
        showNonCurrentDates={true} // 現在の月の前後の日付も表示します
        // タイトル形式を「4/2025」のように設定
        titleFormat={{ month: "numeric", year: "numeric" }}
        // 曜日を表示する設定
        dayHeaderFormat={{ weekday: "short" }} // 'short'で月、火などの短い表示
        dayHeaderClassNames="text-slate-700 bg-white py-2 text-sm" // 曜日ヘッダーのスタイル
        // 現在の日付をハイライト
        dayMaxEventRows={3}
        nowIndicator={true}
        // 今日ボタンのテキストをカスタマイズ
        buttonText={{
          today: "今日",
        }}
        // ナビゲーションを改善
        navLinks={true} // 日付や曜日をクリックしてビュー切替可能に
      />
    </div>
  );
}
