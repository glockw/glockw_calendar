import ClockIcon from "./icons/ClockIcon";

export default function ReminderHeader({ date }) {
  return (
    <div className="flex flex-row justify-center items-center h-full">
      <ClockIcon />
      <span className="text-gray-400 text-xl">{date}</span>
    </div>
  );
}
