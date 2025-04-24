import { Card, CardContent } from "@/_components/shadcn_ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/shadcn_ui/tabs";
import { WeeklyProgress } from "./weekly/activityProgress";
import { ActivityGraph } from "./graph/activityGraph";
import { Activity, User } from "types/type";
import { client } from "@/utils/client";
import ActivityCalendar from "./calender/activityCalendar";

export async function ActivityTabs({ data }: { data: User }) {
  const res = await client.api.user.activity.$get({
    param: { clerk_id: data.clerk_id },
  });
  if (!res.ok) {
    throw new Error(`APIエラー: ${res.status}`);
  }

  const activity = (await res.json()) as Activity[];

  return (
    <Tabs defaultValue="pet" className="flex flex-col h-full w-full">
      <TabsList className="bg-slate-800/50 border border-slate-700/50 p-1 rounded-full mb-6">
        <TabsTrigger
          value="pet"
          className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
        >
          ペット
        </TabsTrigger>
        <TabsTrigger
          value="calendar"
          className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
        >
          カレンダー
        </TabsTrigger>
        <TabsTrigger
          value="graphs"
          className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
        >
          グラフ
        </TabsTrigger>
        <TabsTrigger
          value="weekly"
          className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
        >
          週次目標
        </TabsTrigger>
      </TabsList>

      <div className="flex-grow min-h-0 w-full">
        <TabsContent value="pet" className="h-full">
          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
            <CardContent className="h-full p-6">
              {/* ペットコンテンツ */}
              <div className="flex items-center justify-center h-full">
                <p className="text-slate-400">
                  ペットコンテンツがここに表示されます
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="">
          <Card className="bg-slate-800/50 border-slate-700/50  backdrop-blur-sm shadow-xl ">
            <CardContent className=" p-6">
              <ActivityCalendar activity={activity} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graphs" className="h-full">
          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
            <CardContent className="h-full p-6">
              <ActivityGraph activity={activity} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="h-full">
          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
            <CardContent className="h-full p-6">
              <WeeklyProgress data={data} />
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
}
