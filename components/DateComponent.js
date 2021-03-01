import { useDispatch, useSelector } from "react-redux";
import { NEXT_DATE, PREV_DATE } from "../actions/action";
import { hourRange } from "../services/time";
import PrevNext from "./PrevNext";
import ReminderHeader from "./ReminderHeader";
const hours = hourRange();
export default function DateComponent() {
  const dispatch = useDispatch();

  const { day } = useSelector((state) => state);

  const prevNext = {
    prev: () => {
      dispatch({
        type: PREV_DATE,
        index: day.index,
      });
    },
    next: () => {
      dispatch({
        type: NEXT_DATE,
        index: day.index,
      });
    },
  };

  return (
    <div className="mx-auto w-2/3 bg-white m-3  rounded-lg h-5/6 overflow-y-auto ">
      <div className="sticky top-0 z-20 bg-gray-200 w-full p-2 text-xl text-center">
        <ReminderHeader />
        {day.date.toDateString()}
        <PrevNext {...prevNext} />
      </div>

      <div className="mx-auto divide-y p-2  overflow-x-auto flex-col ">
        {hours.map((h, i) => (
          <div className="flex w-full  h-10" key={h}>
            <span className="mr-4">{h}</span>

            {day.reminders
              .filter((s) => s.fromHour == h)
              .map((s, i) => {
                return <EventComponent key={s.id} {...s} left={20 + i * 20} />;
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
