import { startAndEndOfMonth } from "../services/time";
import DaysOfTheWeek from "./DaysOfTheWeek";
import Week from "./Week";

export default function Month() {
  const { start, end } = startAndEndOfMonth();
  return (
    <div className="mx-auto">
      <DaysOfTheWeek />
      <Week />
      <Week />
      <Week />
      <Week />
      <Week />
    </div>
  );
}
