"use client";

import { useState } from "react";
import { Activity, ActivityDetail } from "types/type";
import { Calendar } from "./Calendar";
import { InputForm } from "./InputForm";



export default function ActivityCalendar({
  activity,
  activityDetail = [],
  userId,
}: {
  activity: Activity[];
  activityDetail?: ActivityDetail[];
  userId: string;
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<ActivityDetail | null>(
    null
  );


  return (
    <div>
      {/* カレンダー部分 */}
      <Calendar
        activity={activity}
        activityDetail={activityDetail}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setSelectedDetail={setSelectedDetail}
      />



        {/* 追加フォーム - 別セクションとして表示 */}
     <InputForm
        userId={userId}
        selectedDate={selectedDate}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        selectedDetail={selectedDetail}
        setSelectedDetail={setSelectedDetail}
      />
      </div>
  );
}
