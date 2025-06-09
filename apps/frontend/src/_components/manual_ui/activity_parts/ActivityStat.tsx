import { Activity, ActivityDetail } from 'types/type';
import { calculateActivityStats } from '../../../utils/calculateActivity';
import { Card, CardContent } from '../../shadcn_ui/card';

export default function ActivityStat({
  activity,
  activityDetail,
}: {
  activity: Activity[];
  activityDetail: ActivityDetail[];
}) {
  const stats = calculateActivityStats(activity, activityDetail);
  const currentMonth = new Date().toLocaleString('ja-JP', { month: 'long' });

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-xl ">
      <CardContent>
        <h3 className="text-lg font-semibold text-white mb-4">活動統計</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-400 mb-1">{currentMonth}の活動</h4>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-300">活動日数</p>
                <p className="text-xl font-bold text-white">{stats.currentMonthDays}日</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">活動時間</p>
                <p className="text-xl font-bold text-white">{stats.currentMonthHours}時間</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-400 mb-1">累計活動</h4>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-300">活動日数</p>
                <p className="text-xl font-bold text-white">{stats.totalDays}日</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">活動時間</p>
                <p className="text-xl font-bold text-white">{stats.totalHours}時間</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
