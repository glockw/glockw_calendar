import moment from "moment";
import ClockIcon from "./ClockIcon";

export default function ReminderHeader() {
  const date = moment().format("MMMM Do YYYY");
  return (
    <div className="flex flex-row justify-center items-center h-full">
      <ClockIcon />
      <span className="text-gray-400 text-xl">{date}</span>
    </div>
  );
}
