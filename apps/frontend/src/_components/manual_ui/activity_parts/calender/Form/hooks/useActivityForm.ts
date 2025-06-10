import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { client } from '@/utils/client';
import { createActivityDetail } from '../../action';
import { ActivityDetail } from 'types/type';

export function useActivityForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: FormData, selectedDetail: ActivityDetail | null) => {
    try {
      setIsSubmitting(true);

      if (selectedDetail) {
        await updateActivityDetail(formData, selectedDetail);
      } else {
        await createActivityDetail(formData);
      }

      router.refresh();
      toast.success('活動を登録しました');
      return true;
    } catch (error) {
      console.error('送信エラー:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateActivityDetail = async (formData: FormData, selectedDetail: ActivityDetail) => {
    const description = formData.get('description') as string;
    const duration_minutes = parseInt(formData.get('duration_minutes') as string, 10);
    const category = formData.get('category') as string;

    if (!description || !duration_minutes || !category) {
      throw new Error('必須項目が入力されていません');
    }

    const response = await client.api.activityDetail.$put({
      json: {
        id: selectedDetail.id,
        description,
        duration_minutes,
        category,
      },
    });

    if (!response.ok) {
      throw new Error('更新に失敗しました');
    }
  };

  return {
    isSubmitting,
    submitForm,
  };
}
