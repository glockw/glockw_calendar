import { useDispatch } from "react-redux";
import { OPEN_DIALOG } from "../actions/action";

export default function Day({ index, current, ...rest }) {
  let { date, reminders, id } = rest;
  const dispatch = useDispatch();

  const openReminder = () => {
    dispatch({
      type: OPEN_DIALOG,
      date,
      id,
    });
  };

  return (
    <div
      onClick={openReminder}
      className={current ? "day_current" : "day-tile"}
    >
      {index}

      {reminders.map((r, i) => (
        <div style={{ backgroundColor: r.color, color: "white" }} key={`${i}`}>
          {r.title}
        </div>
      ))}
    </div>
  );
}
