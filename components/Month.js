import { daysOfMonth } from "../services/time";
import DaysOfTheWeek from "./DaysOfTheWeek";
import Week from "./Week";

export default function Month() {
  const [first, second, third, fourth, fifth] = daysOfMonth();
  return (
    <div className="mx-auto">
      <DaysOfTheWeek />
      <Week days={first} />
      <Week days={second} />
      <Week days={third} />
      <Week days={fourth} />
      <Week days={fifth} />
    </div>
  );
}
