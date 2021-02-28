import { useSelector } from "react-redux";
import DaysOfTheWeek from "./DaysOfTheWeek";
import Week from "./Week";

export default function Month() {
  const { month } = useSelector((state) => state);

  return (
    <div className="mx-auto">
      <DaysOfTheWeek />
      {month.map((week, index) => (
        <Week key={`Week__${index}`} days={week} />
      ))}
    </div>
  );
}
