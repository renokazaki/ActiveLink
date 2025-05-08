import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";
import { SmileIcon, Edit, X } from "lucide-react";
import { Activity, ActivityDetail } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";
import { DeleteDetail } from "./utils/utils";

interface CalendarProps {
  activity: Activity[];
  activityDetail?: ActivityDetail[];
  selectedDate: string | null;
  isEditModalOpen: boolean;
  setSelectedDate: (date: string | null) => void;
  setIsEditModalOpen: (open: boolean) => void;
  setSelectedDetail: (detail: ActivityDetail | null) => void;
  isMyPage: boolean;
}

export function Calendar({
  activity,
  activityDetail,
  selectedDate,
  setSelectedDate,
  isEditModalOpen,
  setIsEditModalOpen,
  setSelectedDetail,
  isMyPage,
}: CalendarProps) {
  
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




  // 選択をクリア
  const handleClearSelection = () => {
    setSelectedDate(null);
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };



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

  return (
    <>
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
                      {isMyPage && (

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditDetail(detail)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() =>
                            DeleteDetail(detail.id.toString())
                          }
                          className="text-red-400 hover:text-red-300"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      )}
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

            {!isEditModalOpen && isMyPage && (
              <Button
                onClick={() => setIsEditModalOpen(true)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                活動詳細を追加
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
