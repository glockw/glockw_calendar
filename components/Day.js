import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setDate } from "../actions/action";

export default function Day({ index, current, ...rest }) {
  let { date, reminders, id } = rest;
  const dispatch = useDispatch();

  const router = useRouter();
  const goTo = () => {
    dispatch(setDate(id));
    router.push("/date");
  };

  return (
    <div onClick={goTo} className={current ? "day_current" : "day-tile"}>
      {index}

      {reminders.map((r, i) => (
        <div style={{ backgroundColor: r.color, color: "white" }} key={`${i}`}>
          {r.title}
        </div>
      ))}
    </div>
  );
}
