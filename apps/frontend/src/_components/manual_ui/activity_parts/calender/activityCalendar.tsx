// "use client";

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { Calendar } from "@/shared/components/ui/calendar";
// import { cn } from "@/lib/utils";
// import type { FriendData } from "@/lib/data";
// import { ActivityDetail } from "./activityDetail";
// import { friendsData } from "@/lib/data";
// import { ActivityData } from "@/shared/types/type";

// interface ActivityCalendarProps {
//   activityData: ActivityData[];
//   friendId?: string;
// }

// export function ActivityCalendar({
//   activityData,
//   friendId,
// }: ActivityCalendarProps) {
//   const [date, setDate] = useState<Date>(new Date());
//   const [mounted, setMounted] = useState(false);
//   const [selectedFriend, setSelectedFriend] = useState<FriendData | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     if (friendId) {
//       const friend = friendsData.find((f) => f.id === friendId);
//       setSelectedFriend(friend || null);
//     } else {
//       setSelectedFriend(friendsData[0]);
//     }
//   }, [friendId]);

//   const getActivityLevel = (date: Date) => {
//     const dateString = format(date, "yyyy-MM-dd");
//     const activity = activityData.find((a) => a.date === dateString);
//     return activity ? activity.duration : 0;
//   };

//   const renderDay = (day: Date) => {
//     if (!mounted) {
//       return (
//         <div className="h-10 w-10 p-0 font-normal rounded-full flex items-center justify-center">
//           <div className="flex flex-col items-center justify-center">
//             {format(day, "d")}
//           </div>
//         </div>
//       );
//     }

//     const activityLevel = getActivityLevel(day);
//     const isSelected =
//       date && format(date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd");
//     const isToday =
//       format(new Date(), "yyyy-MM-dd") === format(day, "yyyy-MM-dd");

//     let bgGradient = "";
//     if (activityLevel > 0) {
//       bgGradient = "bg-gradient-to-br from-blue-500 to-blue-600";
//     }

//     return (
//       <div
//         className={cn(
//           "h-10 w-10 p-0 font-normal rounded-full flex items-center justify-center relative transition-all duration-200",
//           bgGradient,
//           isSelected &&
//             "ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900",
//           isToday && !isSelected && "ring-2 ring-pink-500",
//           activityLevel > 0 && "cursor-pointer hover:scale-105"
//         )}
//         onClick={() => {
//           if (activityLevel > 0) {
//             setDate(day);
//           }
//         }}
//       >
//         <div className="flex flex-col items-center justify-center">
//           {format(day, "d")}
//         </div>
//       </div>
//     );
//   };

//   const selectedDateActivity = getActivityLevel(date);

//   const generateActivities = (count: number, date: Date) => {
//     if (!selectedFriend) return [];

//     const activities = [];
//     const baseTime = new Date(date);
//     baseTime.setHours(9, 0, 0);

//     const activityTypes = selectedFriend.activityTypes;

//     for (let i = 0; i < Math.min(count, activityTypes.length); i++) {
//       const activityTime = new Date(baseTime);
//       activityTime.setHours(activityTime.getHours() + i * 2);

//       activities.push({
//         id: i,
//         date: format(activityTime, "yyyy-MM-dd"),
//         duration: activityTypes[i].duration,
//         name: activityTypes[i].name,
//       });
//     }

//     return activities;
//   };

//   const activities = generateActivities(selectedDateActivity, date);
//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={(newDate) => {
//               if (newDate) {
//                 setDate(newDate);
//               }
//             }}
//             className="h-full flex items-center justify-center  rounded-md border border-slate-700/50 bg-slate-800/30 text-white "
//             components={{
//               Day: ({ date: day }) => renderDay(day),
//             }}
//           />
//         </div>

//         <div className="md:w-1/2">
//           <ActivityDetail
//             date={date}
//             activityLevel={selectedDateActivity}
//             activities={activities}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
