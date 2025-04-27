"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction"; // 日付クリック引数の型をインポート
import { SmileIcon, Edit, X } from "lucide-react";
import { Activity, ActivityDetail } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";
import { useRouter } from "next/navigation";
import { createActivityDetail } from "./actions";
// import { updateActivityDetail } from "./updateActivityDetail";

export default function ActivityCalendar({
  activity,
  activityDetail = [],
  userId,
}: {
  activity: Activity[];
  activityDetail?: ActivityDetail[];
  userId?: string;
}) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<ActivityDetail | null>(
    null
  );

  // 日付だけを抽出した単純なイベント配列を作成
  const events = activity.map((item) => ({
    date: new Date(item.activity_date).toISOString().split("T")[0],
    display: "background",
    backgroundColor: "rgba(10, 300, 100)",
  }));

  const renderEventContent = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <SmileIcon className="h-5 w-5 text-white" />
      </div>
    );
  };

  // 日付をクリックしたときのハンドラー (any型からDateClickArg型に変更)
  const handleDateClick = (info: DateClickArg) => {
    setSelectedDate(info.dateStr);
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  // 選択した日付のActivityを取得
  const selectedActivity = selectedDate
    ? activity.find(
        (item) =>
          new Date(item.activity_date).toISOString().split("T")[0] ===
          selectedDate
      )
    : null;

  // 選択した日付のActivityDetailを取得
  const selectedActivityDetails =
    selectedActivity && activityDetail
      ? activityDetail.filter(
          (detail) => detail.activity_id === selectedActivity.id
        )
      : [];

  // 編集モードに切り替える
  const handleEditDetail = (detail: ActivityDetail) => {
    setSelectedDetail(detail);
    setIsEditModalOpen(true);
  };

  // フォーム送信ハンドラー
  const handleSubmit = async (formData: FormData) => {
    await createActivityDetail(formData);
    router.refresh();
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  // // ActivityDetailの更新
  // const handleUpdateDetail = async (formData: FormData) => {
  //   // await updateActivityDetail(formData);
  //   router.refresh();
  //   setIsEditModalOpen(false);
  //   setSelectedDetail(null);
  // };

  // 選択をクリア
  const handleClearSelection = () => {
    setSelectedDate(null);
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  return (
    <div>
      {/* カレンダー部分 */}
      <div className="mb-8">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
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
          fixedWeekCount={false}
          showNonCurrentDates={true}
          titleFormat={{ month: "numeric", year: "numeric" }}
          dayHeaderFormat={{ weekday: "short" }}
          dayHeaderClassNames="text-slate-700 bg-white py-2 text-sm"
          dayMaxEventRows={3}
          nowIndicator={true}
          buttonText={{
            today: "今日",
          }}
          dateClick={handleDateClick}
        />
      </div>

      {/* 選択した日付の詳細を表示（カレンダーの下に配置） */}
      <div id="activity-details-section">
        {selectedDate && (
          <div className="bg-slate-800/90 border border-slate-600 p-4 rounded-lg shadow-lg text-white mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">{selectedDate} の活動</h3>
              <button
                onClick={handleClearSelection}
                className="text-slate-400 hover:text-white"
              >
                <X size={25} />
              </button>
            </div>

            {selectedActivityDetails.length > 0 ? (
              <div className="space-y-4">
                {selectedActivityDetails.map((detail) => (
                  <div
                    key={detail.id}
                    className="bg-slate-700/50 p-3 rounded-md"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">
                        {/* カテゴリーを入力に変更 */}
                        {detail.category || "未分類"}
                      </h4>
                      <button
                        onClick={() => handleEditDetail(detail)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit size={25} />
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 mt-1">
                      {detail.description}
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      {detail.duration_minutes}分
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400">この日の活動詳細はありません</p>
            )}

            {!isEditModalOpen && (
              <Button
                onClick={() => setIsEditModalOpen(true)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                活動詳細を追加
              </Button>
            )}
          </div>
        )}

        {/* 追加/編集フォーム - 別セクションとして表示 */}
        {isEditModalOpen && selectedDate && (
          <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {selectedDetail ? "活動詳細を編集" : "新しい活動詳細を追加"}
              </h3>
            </div>

            <form
              id="activity-detail-form"
              // action={selectedDetail ? handleUpdateDetail : handleSubmit}
              action={handleSubmit}
              className="space-y-3"
            >
              <input type="hidden" name="user_clerk_id" value={userId} />
              <input type="hidden" name="activity_date" value={selectedDate} />
              {selectedDetail && (
                <input type="hidden" name="id" value={selectedDetail.id} />
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  活動内容
                </label>
                <textarea
                  name="description"
                  required
                  rows={2}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
                  placeholder="どのような活動を行いましたか？"
                  defaultValue={selectedDetail?.description || ""}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  活動時間（分）
                </label>
                <input
                  type="number"
                  name="duration_minutes"
                  required
                  min="1"
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
                  placeholder="例: 30"
                  defaultValue={selectedDetail?.duration_minutes || ""}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  カテゴリー
                </label>
                <input
                  type="text"
                  name="category"
                  required
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
                  placeholder="例: 勉強、運動、趣味など"
                  defaultValue={selectedDetail?.category || ""}
                  list="category-suggestions"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <Button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedDetail(null);
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-400"
                >
                  キャンセル
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {selectedDetail ? "更新" : "追加"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
