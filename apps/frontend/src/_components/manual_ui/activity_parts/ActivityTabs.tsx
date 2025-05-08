import { Card, CardContent } from "@/_components/shadcn_ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/shadcn_ui/tabs";
import { ActivityGraph } from "./graph/activityGraph";
import { Activity, ActivityDetail, User } from "types/type";
import { client } from "@/utils/client";
import ActivityCalendar from "./calender/activityCalendar";
import { WeeklyTargets } from "./weekly/weeklyTargets";
import { auth } from "@clerk/nextjs/server";

export async function ActivityTabs({ data }: { data: User }) {

  // Clerkから自分の認証情報を取得
  const { userId } = await auth();
    // 自分のページかどうかを確認（ログインユーザーとページのユーザーが一致するか）
    const isMyPage = userId === data.clerk_id;

  const clerk_id = data.clerk_id;
  let activity: Activity[] = [];
  let activityDetail: ActivityDetail[] = [];
  try {

    // 1. Activityを取得
    const res = await client.api.activity.$get({
      query: { clerk_id: clerk_id },
    });
    
    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Activity API Error:', {
        status: res.status,
        body: errorBody
      });
      throw new Error(`Activity APIエラー: ${res.status} - ${errorBody}`);
    }

    activity = (await res.json()) as Activity[];
    
    // 2. Activityが存在する場合のみ、ActivityDetailを取得
    if (activity.length > 0) {
      // activity_idの配列を作成
      const activityIds = activity.map((item) => item.id);
      
      // ActivityDetailを取得
      const res2 = await client.api.activityDetail.$get({
        query: { activity_ids: activityIds.join(",") }
      });

      if (!res2.ok) {
        // ActivityDetailが見つからない場合は空の配列を返す
        if (res2.status === 404) {
          console.log('ActivityDetailが見つかりませんでした');
          activityDetail = [];
        } else {
          const errorBody = await res2.text();
          console.error('ActivityDetail API Error:', {
            status: res2.status,
            body: errorBody,
            activityIds: activityIds.join(",")
          });
          throw new Error(`ActivityDetail APIエラー: ${res2.status} - ${errorBody}`);
        }
      } else {
        activityDetail = (await res2.json()) as ActivityDetail[];
      }
    }
  } catch (error) {
    console.error('Error in ActivityTabs:', error);
    throw error; // エラーを再スローして親コンポーネントに伝播
  }


  return (
    <Tabs defaultValue="calendar" className="flex flex-col h-full w-full">
      <TabsList className="bg-slate-800/50 border border-slate-700/50 p-1 rounded-full mb-6">
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
        <TabsContent value="calendar">
          <Card className="bg-slate-800/50 border-slate-700/50  backdrop-blur-sm shadow-xl ">
            <CardContent className=" p-6">
              <ActivityCalendar
                activity={activity}
                activityDetail={activityDetail}
                userId={clerk_id}
                isMyPage={isMyPage}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graphs" className="h-full">
          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
            <CardContent className="h-full p-6">
              <ActivityGraph
                activity={activity}
                activityDetail={activityDetail}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="h-full">
          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
            <CardContent className="h-full p-6">
              <WeeklyTargets data={data} isMyPage={isMyPage}/>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
}
