"use client";

import React from "react";
import { ActivityDetail } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";

interface ActivityDetailFormProps {
  selectedDate: string;
  userId?: string;
  selectedDetail: ActivityDetail | null;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onCancel: () => void;
  onUpdate: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function ActivityDetailForm({
  selectedDate,
  userId,
  selectedDetail,
  isLoading,
  onSubmit,
  onUpdate,
  onCancel,
}: ActivityDetailFormProps) {
  const isViewMode = !!selectedDetail;

  return (
    <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">
          {isViewMode ? "活動詳細を表示" : "新しい活動詳細を追加"}
        </h3>
      </div>

      <form
        id="activity-detail-form"
        onSubmit={isViewMode ? onUpdate : onSubmit}
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
            onClick={onCancel}
            className="flex-1 bg-red-500 hover:bg-red-400"
          >
            {isViewMode ? "閉じる" : "キャンセル"}
          </Button>
          {isViewMode ? (
            <Button
            type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-400"
            >
              更新する
            </Button>
          ) : (
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
  );
}