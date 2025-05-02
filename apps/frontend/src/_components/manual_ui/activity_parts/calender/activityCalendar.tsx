"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { SmileIcon } from "lucide-react";
import { Activity, ActivityDetail } from "types/type";
import useActivityCalendar from "./hooks/useActivityCalender";
import { createCalendarEvents } from "./utils/activityutils";
import ActivityDetailsList from "./compoonents/ActivityDetailsList";
import ActivityDetailForm from "./compoonents/ActivityDetailFrom";

interface ActivityCalendarProps {
  userId?: string;
  activity: Activity[];
  activityDetail?: ActivityDetail[];
}

export default function ActivityCalendar({
  userId,
  activity,
  activityDetail = [],
}: ActivityCalendarProps) {
  const {
    selectedDate,
    isEditModalOpen,
    selectedDetail,
    isLoading,
    selectedActivityDetails,
    handleDateClick,
    handleEditDetail,
    handleDeleteDetail,
    handleSubmit,
    handleClearSelection,
    handleOpenEditMode,
    handleCloseEditMode,
    handleUpdateDetail
  } = useActivityCalendar(activity, activityDetail);

  // カレンダーイベントを作成
  const events = createCalendarEvents(activity);

  // イベントコンテンツのレンダリング
  const renderEventContent = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <SmileIcon className="h-5 w-5 text-white" />
      </div>
    );
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

      {/* 選択した日付の詳細を表示 */}
      <div id="activity-details-section">
        {selectedDate && !isEditModalOpen && (
          <ActivityDetailsList
            selectedDate={selectedDate}
            selectedActivityDetails={selectedActivityDetails}
            onEditDetail={handleEditDetail}
            onDeleteDetail={handleDeleteDetail}
            onAddNew={handleOpenEditMode}
            onClose={handleClearSelection}
          />
        )}

        {/* 追加/編集フォーム */}
        {isEditModalOpen && selectedDate && (
          <ActivityDetailForm
            selectedDate={selectedDate}
            userId={userId}
            selectedDetail={selectedDetail}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onCancel={handleCloseEditMode}
            onUpdate={handleUpdateDetail}
          />
        )}
      </div>
    </div>  
  );
}