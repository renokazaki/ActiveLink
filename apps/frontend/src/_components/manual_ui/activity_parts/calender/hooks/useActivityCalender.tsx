"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DateClickArg } from "@fullcalendar/interaction";
import { Activity, ActivityDetail } from "types/type";
import { toast } from "sonner";
import { getActivityDetailsForDate, deleteActivityDetail, getOrCreateActivity, createActivityDetail  } from "../utils/activityutils";


export default function useActivityCalendar(
  activity: Activity[],
  activityDetail: ActivityDetail[],
) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<ActivityDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 日付をクリックしたときのハンドラー
  const handleDateClick = (info: DateClickArg) => {
    setSelectedDate(info.dateStr);
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  // 選択した日付のActivityDetailを取得
  const selectedActivityDetails = selectedDate
    ? getActivityDetailsForDate(selectedDate, activity, activityDetail)
    : [];

  // 編集モードに切り替える
  const handleEditDetail = (detail: ActivityDetail) => {
    setSelectedDetail(detail);
    setIsEditModalOpen(true);
  };

  // 活動詳細の削除ハンドラー
  const handleDeleteDetail = async (id: string) => {
    setIsLoading(true);

    try {
      await deleteActivityDetail(id);
      
      // 成功したらUIを更新
      router.refresh();
      toast.success("活動詳細を削除しました");
    } catch (error) {
      console.error("Error deleting activity detail:", error);
      toast.error("削除中にエラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  // フォーム送信ハンドラー
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

      // 1. 指定された日付のActivityを検索または作成
      const activityId = await getOrCreateActivity(user_clerk_id, activity_date);

      // 2. ActivityDetailを新規作成
      await createActivityDetail(
        activityId,
        description,
        duration_minutes,
        category
      );

      // 成功したらUIを更新
      router.refresh();
      setIsEditModalOpen(false);
      setSelectedDetail(null);
      toast.success("活動詳細を追加しました");
    } catch (error) {
      console.error("Error creating activity detail:", error);
      toast.error("追加中にエラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  // 編集モードの切り替え
  const toggleEditMode = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  // フォーム更新ハンドラー
  const handleUpdateDetail = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("更新処理をここに追加する。現在は動作が上手くいかないためコメントアウト");

    e.preventDefault();
    setIsLoading(true);
    toggleEditMode();
    // try {
    //   const formData = new FormData(e.currentTarget);
    //   const id = formData.get("id") as string;
    //   const description = formData.get("description") as string;
    //   const duration_minutes = parseInt(
    //     formData.get("duration_minutes") as string
    //   );
    //   const category = formData.get("category") as string;

    //   // 1. 指定されたIDのActivityDetailを更新
    //   await updateActivityDetail(id, description, duration_minutes, category);


    //   // 成功したらUIを更新
    //   router.refresh();
    //   setIsEditModalOpen(false);
    //   setSelectedDetail(null);
    //   toast.success("活動詳細を更新しました");
    // } catch (error) {
    //   console.error("Error updating activity detail:", error);
    //   toast.error("活動詳細の更新に失敗しました");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // 選択をクリア
  const handleClearSelection = () => {
    setSelectedDate(null);
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  // 編集モードを開く
  const handleOpenEditMode = () => {
    setIsEditModalOpen(true);
  };

  // 編集モードを閉じる
  const handleCloseEditMode = () => {
    setIsEditModalOpen(false);
    setSelectedDetail(null);
  };

  return {
    selectedDate,
    isEditModalOpen,
    selectedDetail,
    isLoading,
    selectedActivityDetails,
    handleDateClick,
    handleEditDetail,
    handleDeleteDetail,
    handleSubmit,
    handleUpdateDetail,
    handleClearSelection,
    handleOpenEditMode,
    handleCloseEditMode,
    toggleEditMode
  };
}