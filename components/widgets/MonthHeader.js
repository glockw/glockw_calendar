import { MONTHS } from "../../utils/constant";

export default function MonthHeader() {
  const month = MONTHS[new Date().getMonth()];
  return (
    <div className="bg-indigo-700 border-2 text-center flex items-center border-gray-400 h-10 w-32;">
      <span className="text-gray-300  my-6 w-full text-xl">{month}</span>
    </div>
  );
}
