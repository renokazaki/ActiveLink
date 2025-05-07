"use client";

import { Button } from "@/_components/shadcn_ui/button";
import { ActivityDetail } from "types/type";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/utils/client"; // Honoクライアントをインポート

export function InputForm({
    selectedDate,
    isEditModalOpen,
    setIsEditModalOpen,
    selectedDetail,
    setSelectedDetail,
    userId,
    activityId, // 活動IDを追加
}: {
    selectedDate: string | null;
    isEditModalOpen: boolean;
    setIsEditModalOpen: (open: boolean) => void;
    selectedDetail: ActivityDetail | null;
    setSelectedDetail: (detail: ActivityDetail | null) => void;
    userId: string;
    activityId: number; // 活動IDの型を追加
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      // フォームからデータを取得
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // オブジェクトに変換
      const description = formData.get("description") as string;
      const duration_minutes = parseInt(formData.get("duration_minutes") as string, 10);
      const category = formData.get("category") as string;
      
      // バリデーション
      if (!description || !duration_minutes || !category) {
        throw new Error("必須項目が入力されていません");
      }
      
      let response;
      
      // 更新か新規作成かを判断
      if (selectedDetail) {
        // PUT操作で更新
        response = await client.api.activityDetail[":id"].$put({
          param: {
            id: selectedDetail.id.toString()
          },
          json: {
            description,
            duration_minutes,
            category
          }
        });
        
       
      } else {
        // 新規作成
        response = await client.api.activityDetail.$post({
          json: {
            activity_id: activityId,
            description,
            duration_minutes,
            category
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "作成中にエラーが発生しました");
        }
      }
      
      // 成功時の処理
      setIsEditModalOpen(false);
      setSelectedDetail(null);
      
      // ページの更新
      router.refresh();
      
    } catch (error) {
      console.error("送信エラー:", error);
      setError(error instanceof Error ? error.message : "エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  // キャンセル処理
  const handleCancel = () => {
    setIsEditModalOpen(false);
    setSelectedDetail(null);
    setError(null);
  };

  return (
    <div>
      {isEditModalOpen && selectedDate && (
        <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              {selectedDetail ? "活動詳細を編集" : "新しい活動詳細を追加"}
            </h3>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 p-2 rounded mb-3 text-sm">
              {error}
            </div>
          )}

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
                onClick={handleCancel}
                variant="destructive"
                className="flex-1"
                disabled={isSubmitting}
              >
                キャンセル
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-500"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? "送信中..." 
                  : selectedDetail 
                    ? "更新" 
                    : "追加"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}