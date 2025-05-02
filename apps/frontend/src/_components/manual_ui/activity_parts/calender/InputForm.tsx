import { Button } from "@/_components/shadcn_ui/button";
import { createActivityDetail } from "./action";
import { ActivityDetail } from "types/type";

export function InputForm({
    selectedDate,
    isEditModalOpen,
    setIsEditModalOpen,
    selectedDetail,
    setSelectedDetail,
    userId,
}: {
    selectedDate: string | null;
    isEditModalOpen: boolean;
    setIsEditModalOpen: (open: boolean) => void;
    selectedDetail: ActivityDetail | null;
    setSelectedDetail: (detail: ActivityDetail | null) => void;
    userId: string;
}) {



  return (
    <div>   {isEditModalOpen && selectedDate && (
        <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              {selectedDetail ? "活動詳細を表示" : "新しい活動詳細を追加"}
            </h3>
          </div>

          <form
            id="activity-detail-form"
            action={createActivityDetail}
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
                {selectedDetail ? "閉じる" : "キャンセル"}
              </Button>
              {!selectedDetail && (
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  { "追加"}
                </Button>
              )}
            </div>
          </form>
        </div>
      )}</div>
  )
}

