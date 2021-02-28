import { daysOfMonth } from "../services/time";
import DaysOfTheWeek from "./DaysOfTheWeek";
import Week from "./Week";

export default function Month() {
  const weeks = daysOfMonth();
  return (
    <div className="mx-auto">
      <DaysOfTheWeek />
      {weeks.map((week, index) => (
        <Week key={`Week__${index}`} days={week} />
      ))}
    </div>
  );
}
