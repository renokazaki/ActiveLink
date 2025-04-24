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
import { Activity } from "types/type";

export function ActivityGraph({ activity }: { activity: Activity[] }) {
  const [period, setPeriod] = useState<"week" | "month">("month");
  const [chartType, setChartType] = useState<"area" | "bar">("area");

  // データを処理
  const processData = () => {
    const sortedData = [...activity].sort(
      (a, b) =>
        new Date(a.activity_date).getTime() -
        new Date(b.activity_date).getTime()
    );

    const limit = period === "week" ? 7 : 30;
    const limitedData = sortedData.slice(-limit);

    return limitedData.map((item) => ({
      date: new Date(item.activity_date).toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
      }),
      // 活動時間の集計例（実際のデータ構造に合わせて調整してください）
      duration:
        item.activity_details?.reduce(
          (sum, detail) => sum + detail.duration_minutes,
          0
        ) || 0,
    }));
  };

  const chartData = processData();

  return (
    <div className="space-y-4">
      {/* 期間選択タブ */}
      <div className="flex justify-between items-center">
        <h3 className="text-white font-medium">活動時間グラフ</h3>
        <Tabs
          value={period}
          onValueChange={(v) => setPeriod(v as "week" | "month")}
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
      <div className="h-[300px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 shadow-xl">
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

      {/* 凡例 */}
      <div className="flex items-center justify-center space-x-2 text-sm">
        <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
        <span className="text-slate-400">1日あたりの活動時間（分）</span>
      </div>
    </div>
  );
}
