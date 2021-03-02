import { useSelector } from "react-redux";
import ClockIcon from "./icons/ClockIcon";

export default function ReminderHeader() {
  const {
    day: { date },
  } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-center items-center h-full">
      <ClockIcon />
      <span className="text-gray-400 text-xl">{date.toDateString()}</span>
    </div>
  );
}
