"use client";

import { Tabs, TabsList, TabsTrigger } from "@/_components/shadcn_ui/tabs";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import { Activity, ActivityDetail } from "types/type";

export function ActivityGraph({
  activity,
  activityDetail,
}: {
  activity: Activity[];
  activityDetail: ActivityDetail[];
}) {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week");
  const [chartType, setChartType] = useState<"area" | "bar">("area");

  // データを処理
  const processData = () => {
    // Activity配列を日付でソート
    const sortedActivities = [...activity].sort(
      (a, b) =>
        new Date(a.activity_date).getTime() -
        new Date(b.activity_date).getTime()
    );

    // 現在の日付を取得
    const today = new Date();

    // 期間に基づいてデータをフィルタリング
    let filteredActivities = sortedActivities;

    if (period === "week") {
      // 過去7日間のデータを取得
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);
      filteredActivities = sortedActivities.filter(
        (item) => new Date(item.activity_date) >= oneWeekAgo
      );
    } else if (period === "month") {
      // 過去30日間のデータを取得
      const oneMonthAgo = new Date();
      oneMonthAgo.setDate(today.getDate() - 30);
      filteredActivities = sortedActivities.filter(
        (item) => new Date(item.activity_date) >= oneMonthAgo
      );
    } else if (period === "year") {
      // 過去365日間のデータを取得
      const oneYearAgo = new Date();
      oneYearAgo.setDate(today.getDate() - 365);
      filteredActivities = sortedActivities.filter(
        (item) => new Date(item.activity_date) >= oneYearAgo
      );
    }

    // データがなければ空の配列を返す
    if (filteredActivities.length === 0) {
      return [];
    }

    // 日付ごとのデータと各日付に紐づくactivity_idを取得
    return filteredActivities.map((item) => {
      // この活動日に関連するすべてのActivityDetail
      const relatedDetails = activityDetail.filter(
        (detail) => detail.activity_id === item.id
      );

      // ActivityDetailの合計時間を計算
      const totalDuration = relatedDetails.reduce(
        (sum, detail) => sum + detail.duration_minutes,
        0
      );

      // 日付表示のフォーマットを期間に応じて変更
      let dateFormat: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
      };
      if (period === "year") {
        dateFormat = { month: "numeric", day: "numeric" };
      }

      return {
        date: new Date(item.activity_date).toLocaleDateString(
          "ja-JP",
          dateFormat
        ),
        duration: totalDuration,
      };
    });
  };

  const chartData = processData();

  return (
    <div className="space-y-4">
      {/* 期間選択タブ */}
      <div className="flex justify-between items-center">
        <h3 className="text-white font-medium">活動時間グラフ</h3>
        <Tabs
          value={period}
          onValueChange={(v) => setPeriod(v as "week" | "month" | "year")}
        >
          <TabsList className="bg-slate-800/50 border border-slate-700/50 rounded-full">
            <TabsTrigger
              value="week"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              週
            </TabsTrigger>
            <TabsTrigger
              value="month"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              月
            </TabsTrigger>
            <TabsTrigger
              value="year"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              年
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* グラフタイプ選択 */}
      <div className="flex justify-end">
        <Tabs
          value={chartType}
          onValueChange={(v) => setChartType(v as "area" | "bar")}
        >
          <TabsList className="bg-slate-800/50 border border-slate-700/50 rounded-full">
            <TabsTrigger
              value="area"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              エリア
            </TabsTrigger>
            <TabsTrigger
              value="bar"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              棒グラフ
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* グラフ表示エリア */}
      <div className="h-[500px] w-full bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "area" ? (
            <AreaChart data={chartData}>
              <XAxis dataKey="date" tick={{ fill: "#94a3b8" }} />
              <YAxis tick={{ fill: "#94a3b8" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              />
              <Area
                type="monotone"
                dataKey="duration"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
            </AreaChart>
          ) : (
            <BarChart data={chartData}>
              <XAxis dataKey="date" tick={{ fill: "#94a3b8" }} />
              <YAxis tick={{ fill: "#94a3b8" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              />
              <Bar dataKey="duration" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* データがない場合のメッセージ */}
      {chartData.length === 0 && (
        <div className="flex justify-center items-center h-20 text-slate-400">
          選択した期間のデータがありません
        </div>
      )}

      {/* 凡例 */}
      <div className="flex items-center justify-center space-x-2 text-sm ">
        <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
        <span className="text-slate-400">1日あたりの活動時間（分）</span>
      </div>
    </div>
  );
}
