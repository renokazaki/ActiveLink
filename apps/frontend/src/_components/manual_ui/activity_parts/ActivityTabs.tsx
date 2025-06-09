import { Card, CardContent } from '@/_components/shadcn_ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/shadcn_ui/tabs';
import { ActivityGraph } from './graph/activityGraph';
import { User } from 'types/type';
import ActivityCalendar from './calender/activityCalendar';
import { auth } from '@clerk/nextjs/server';
import { getActivities } from './functions';
import { Suspense } from 'react';
import { SkeletonCard } from '../SkeltonCard';
import ActivityStat from '@/_components/manual_ui/activity_parts/ActivityStat';

export async function ActivityTabs({ data }: { data: User }) {
  const { userId } = await auth();
  // 自分のページかどうかを確認（ログインユーザーとページのユーザーが一致するか）
  const isMyPage = userId === data.clerk_id;

  const { activity, activityDetail } = await getActivities(data.clerk_id);

  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        <ActivityStat activity={activity} activityDetail={activityDetail} />
      </Suspense>
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
        </TabsList>

        <div className="flex-grow min-h-0 w-full">
          <Suspense fallback={<SkeletonCard />}>
            <TabsContent value="calendar">
              <Card className="bg-slate-800/50 border-slate-700/50  backdrop-blur-sm shadow-xl ">
                <CardContent className=" p-6">
                  <ActivityCalendar
                    activity={activity}
                    activityDetail={activityDetail}
                    userId={data.clerk_id}
                    isMyPage={isMyPage}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Suspense>

          <Suspense fallback={<SkeletonCard />}>
            <TabsContent value="graphs" className="h-full">
              <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden backdrop-blur-sm shadow-xl h-full">
                <CardContent className="h-full p-6">
                  <ActivityGraph activity={activity} activityDetail={activityDetail} />
                </CardContent>
              </Card>
            </TabsContent>
          </Suspense>
        </div>
      </Tabs>
    </>
  );
}
