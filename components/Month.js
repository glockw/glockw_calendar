import { useSelector } from "react-redux";
import DaysOfTheWeek from "../components/widgets/DaysOfTheWeek";
import Week from "./Week";
import MonthHeader from "./widgets/MonthHeader";
export default function Month() {
  const { month } = useSelector((state) => state);

  return (
    <div className="mx-auto">
      <MonthHeader />
      <DaysOfTheWeek />
      {month.map((week, index) => (
        <Week key={`Week__${index}`} days={week} />
      ))}
    </div>
  );
}
