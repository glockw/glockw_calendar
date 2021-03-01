import { DAYS_OF_WEEK } from "../utils/constant";

export default function DaysOfTheWeek() {
  const week = DAYS_OF_WEEK;
  return (
    <div className="flex w-full  items-center">
      {week.map((day, index) => (
        <div
          key={`day__${index}`}
          className="day-name text-gray-100 text-center p-1"
        >
          {day}
        </div>
      ))}
    </div>
  );
}
