import { Activity, ActivityDetail } from 'types/type';

export interface ActivityStats {
  totalDays: number;
  totalHours: number;
  currentMonthDays: number;
  currentMonthHours: number;
}

export function calculateActivityStats(
  activities: Activity[],
  activityDetails: ActivityDetail[]
): ActivityStats {
  // Get unique activity dates for total count
  const uniqueDates = new Set(activities.map(activity => activity.activity_date.split('T')[0]));

  // Calculate total hours from all activity details
  const totalMinutes = activityDetails.reduce((sum, detail) => sum + detail.duration_minutes, 0);
  const totalHours = Math.round((totalMinutes / 60) * 10) / 10; // Round to 1 decimal place

  // Get current date and determine current month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-indexed

  // Filter activities for current month
  const currentMonthActivities = activities.filter(activity => {
    const activityDate = new Date(activity.activity_date);
    return (
      activityDate.getFullYear() === currentYear && activityDate.getMonth() + 1 === currentMonth
    );
  });

  // Get unique dates for current month
  const currentMonthUniqueDates = new Set(
    currentMonthActivities.map(activity => activity.activity_date.split('T')[0])
  );

  // Calculate hours for current month
  const currentMonthActivityIds = new Set(currentMonthActivities.map(activity => activity.id));
  const currentMonthDetails = activityDetails.filter(detail =>
    currentMonthActivityIds.has(detail.activity_id)
  );

  const currentMonthMinutes = currentMonthDetails.reduce(
    (sum, detail) => sum + detail.duration_minutes,
    0
  );
  const currentMonthHours = Math.round((currentMonthMinutes / 60) * 10) / 10;

  return {
    totalDays: uniqueDates.size,
    totalHours: totalHours,
    currentMonthDays: currentMonthUniqueDates.size,
    currentMonthHours: currentMonthHours,
  };
}
