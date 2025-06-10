'use client';

import { ActivityDetail } from 'types/type';
import { ActivityForm } from '../ActivityForm';
import { useActivityForm } from './useActivityForm';

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
  const { isSubmitting, submitForm } = useActivityForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const success = await submitForm(formData, selectedDetail);
    if (success) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  if (!isEditModalOpen || !selectedDate) {
    return null;
  }

  return (
    <div className="bg-slate-700/90 border border-slate-500 p-4 rounded-lg shadow-lg text-white">
      <ActivityForm
        selectedDate={selectedDate}
        selectedDetail={selectedDetail}
        userId={userId}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        onCancel={handleClose}
      />
    </div>
  );
}
