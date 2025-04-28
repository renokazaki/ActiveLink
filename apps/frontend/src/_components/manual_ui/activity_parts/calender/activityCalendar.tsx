"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";
import { SmileIcon, Edit, X } from "lucide-react";
import { Activity, ActivityDetail } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";
import { useRouter } from "next/navigation";
import { client } from "@/utils/client"; // Honoクライアントを直接インポート

// ISO-8601形式の日本時間を取得する関数
function getJapanTimeISOString(dateStr?: string) {
  let date;

  if (dateStr) {
    date = new Date(dateStr);
  } else {
    date = new Date();
  }

  // 日本時間に調整（UTC+9時間）
  const jpTime = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  return jpTime.toISOString();
}

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
  const [isLoading, setIsLoading] = useState(false); // ローディング状態を追加

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

  // 日付をクリックしたときのハンドラー
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

  // 編集モードに切り替える（詳細を表示するだけ）
  const handleEditDetail = (detail: ActivityDetail) => {
    setSelectedDetail(detail);
    setIsEditModalOpen(true);
  };

  // フォーム送信ハンドラー（新規作成のみ）- サーバーアクションを使わない版
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const user_clerk_id = formData.get("user_clerk_id") as string;
      const activity_date = formData.get("activity_date") as string;
      const description = formData.get("description") as string;
      const duration_minutes = parseInt(
        formData.get("duration_minutes") as string
      );
      const category = formData.get("category") as string;

      // 1. 指定された日付のActivityを検索
      const activityResponse = await client.api.activity.$get({
        query: { clerk_id: user_clerk_id },
      });

      if (!activityResponse.ok) {
        throw new Error("活動データの取得に失敗しました");
      }

      const responseData = await activityResponse.json();
      // TypeScriptのエラーを回避するために型アサーションを使用
      const activities = Array.isArray(responseData) ? responseData : [];

      // 指定した日付に一致するアクティビティを検索
      const targetActivity = activities.find((act: Activity) => {
        return act.activity_date.split("T")[0] === activity_date;
      });

      let activityId;

      // 2. 該当日のActivityが存在しない場合は新規作成
      if (!targetActivity) {
        // ISO-8601形式の完全な日時文字列を生成
        const isoDateString = getJapanTimeISOString(activity_date);

        const newActivityResponse = await client.api.activity.$post({
          json: {
            user_clerk_id,
            activity_date: isoDateString,
          },
        });

        if (!newActivityResponse.ok) {
          throw new Error("活動の作成に失敗しました");
        }

        const newActivity = await newActivityResponse.json();
        activityId = newActivity.id;
      } else {
        // 既存のActivityを使用
        activityId = targetActivity.id;
      }

      // 3. ActivityDetailを作成
      const detailResponse = await client.api.activityDetail.$post({
        json: {
          activity_id: activityId,
          description,
          duration_minutes,
          category,
        },
      });

      if (!detailResponse.ok) {
        throw new Error("活動詳細の登録に失敗しました");
      }

      // 成功したらUIを更新
      router.refresh();
      setIsEditModalOpen(false);
      setSelectedDetail(null);
    } catch (error) {
      console.error("Error creating activity detail:", error);
      // エラー処理をここに追加することもできます
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* 追加フォーム - 別セクションとして表示 */}
        {isEditModalOpen && selectedDate && (
          <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {selectedDetail ? "活動詳細を表示" : "新しい活動詳細を追加"}
              </h3>
            </div>

            <form
              id="activity-detail-form"
              onSubmit={handleSubmit}
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
                  readOnly={!!selectedDetail}
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
                  readOnly={!!selectedDetail}
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
                  readOnly={!!selectedDetail}
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
                  {selectedDetail ? "閉じる" : "キャンセル"}
                </Button>
                {!selectedDetail && (
                  <Button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "送信中..." : "追加"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
