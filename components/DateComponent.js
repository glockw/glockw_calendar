import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LAUNCH_CREATE_DIALOG, NEXT_DATE, PREV_DATE } from "../actions/action";
import { hourRange } from "../services/time";
import EventComponent from "./Event";
import PrevNext from "./PrevNext";
import ReminderHeader from "./ReminderHeader";

const hours = hourRange();
export default function DateComponent() {
  const dispatch = useDispatch();

  const { day } = useSelector((state) => state);

  useEffect(() => {
    let selected = window.document.querySelector(".row-31");
    selected.parentNode.parentNode.scrollTop = selected.offsetTop;
  }, []);

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

  const reminders = day ? day.reminders : [];

  const createReminder = (h) => {
    dispatch({
      type: LAUNCH_CREATE_DIALOG,
      day,
      reminder: {
        from: hours.indexOf(h),
        city: "",
        title: "",
        color: "#000000",
      },
    });
  };
  return (
    <div className="mx-auto w-2/3 bg-white m-3  rounded-lg h-5/6 overflow-y-auto ">
      <div className="sticky top-0 z-20 bg-gray-200 w-full p-2 text-xl text-center">
        <ReminderHeader />
        <Link href="/">
          <a>Home</a>
        </Link>

        <PrevNext {...prevNext} />
      </div>

      <div
        style={{ scrollSnapAlign: "end" }}
        className="mx-auto divide-y p-2 cursor-pointer overflow-x-auto flex-col "
      >
        {hours.map((h, i) => (
          <div
            onClick={() => createReminder(h)}
            className={`$flex w-full  h-10 hover:bg-gray-300 row-${i}`}
            key={h}
          >
            <span className="mr-4">{h}</span>

            {reminders
              .filter((s) => s.fromHour == h)
              .map((s) => {
                return <EventComponent key={s.id} {...s} />;
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
