// import { Clock, Plus } from "lucide-react";
// import { Card, CardContent } from "../shadcn_ui/card";
// import { Button } from "../shadcn_ui/button";
// import { ActivityDetail } from "types/type";

// interface ActivityDetailProps {
//   date: Date;
//   activityLevel: number;
//   activities: ActivityDetail[];
// }

// export function ActivityDetail({
//   date,
//   activityLevel,
//   activities,
// }: ActivityDetailProps) {
//   return (
//     <Card className="bg-slate-800/30 border-slate-700/50 overflow-hidden backdrop-blur-sm h-full">
//       <CardContent className="px-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-medium text-white">
//             {format(date, "EEEE, MMMM d, yyyy")}
//           </h3>
//         </div>

//         {activityLevel > 0 ? (
//           <>
//             <div className="space-y-3 ">
//               <h4 className="text-sm font-medium text-slate-300 mb-2">
//                 今日のアクティビティ
//               </h4>
//               {activities.map((activity) => (
//                 <div
//                   key={activity.id}
//                   className="flex items-center p-3 rounded-lg border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800/80 transition-colors"
//                 >
//                   <div className="flex w-full">
//                     <div className="font-medium text-white flex items-center ">
//                       {activity.description}
//                     </div>
//                     <div className="text-xs text-slate-400 flex items-center  ">
//                       <span className="bg-slate-900/50 px-2 py-0.5 rounded-full text-slate-300">
//                         {activity.duration_minutes}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Button className="bg-green-300 text-black" size="icon">
//                       編集
//                     </Button>
//                     <Button variant="destructive" size="icon">
//                       削除
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center py-12 text-center">
//             <div className="w-16 h-16 rounded-full bg-slate-900/50 flex items-center justify-center mb-4">
//               <Clock className="h-8 w-8 text-slate-500" />
//             </div>
//             <p className="text-slate-400">
//               この日のアクティビティは記録されていません。
//             </p>
//             <p className="text-sm text-slate-500 mt-1">
//               アクティビティを始めましょう！
//             </p>
//             <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
//               アクティビティを追加
//             </button>
//           </div>
//         )}
//         <div className="flex justify-end">
//           <Button variant="default" className="mt-4 ">
//             <Plus className="w-4 h-4 " />
//             アクティビティを追加
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
