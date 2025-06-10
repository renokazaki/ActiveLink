'use client';

import { Button } from '@/_components/shadcn_ui/button';
import { ActivityDetail } from 'types/type';

interface ActivityFormProps {
  selectedDate: string;
  selectedDetail: ActivityDetail | null;
  userId: string;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export function ActivityForm({
  selectedDate,
  selectedDetail,
  userId,
  isSubmitting,
  onSubmit,
  onCancel,
}: ActivityFormProps) {
  const isEditing = !!selectedDetail;

  return (
    <form id="activity-detail-form" onSubmit={onSubmit} className="space-y-3">
      {/* Hidden fields */}
      <input type="hidden" name="user_clerk_id" value={userId} />
      <input type="hidden" name="activity_date" value={selectedDate} />
      {selectedDetail && <input type="hidden" name="id" value={selectedDetail.id} />}

      {/* Activity Description */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">活動内容</label>
        <textarea
          name="description"
          required
          rows={2}
          className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
          placeholder="どのような活動を行いましたか？"
          defaultValue={selectedDetail?.description || ''}
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">活動時間（分）</label>
        <input
          type="number"
          name="duration_minutes"
          required
          min="1"
          className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
          placeholder="例: 30"
          defaultValue={selectedDetail?.duration_minutes || ''}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">カテゴリー</label>
        <input
          type="text"
          name="category"
          required
          className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white text-sm"
          placeholder="例: 勉強、運動、趣味など"
          defaultValue={selectedDetail?.category || ''}
          list="category-suggestions"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-2">
        <Button
          type="button"
          onClick={onCancel}
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
          {isSubmitting ? '送信中...' : isEditing ? '更新' : '追加'}
        </Button>
      </div>
    </form>
  );
}
