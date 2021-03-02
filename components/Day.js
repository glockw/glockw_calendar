import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setDate } from "../actions/action";
import { duration } from "../services/time";

const classes = {
  day: (current, isWeekend) => {
    if (current) return "day-current";
    if (isWeekend) return "weekend";

    return "day-tile";
  },
};

const styles = {
  reminder: (color) => ({
    backgroundColor: color,
    opacity: 0.8,
    color: "white",
  }),
};
export default function Day({ index, current, ...rest }) {
  let { date, reminders, id } = rest;

  const dispatch = useDispatch();
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;

  const sortFun = (a, b) => a.from - b.from;
  const data = reminders.sort(sortFun);

  const router = useRouter();
  const goTo = () => {
    dispatch(setDate(id));
    router.push(`/date/${id}`);
  };

  return (
    <div onClick={goTo} className={classes.day(current, isWeekend)}>
      {index}

      {data.map((r, i) => (
        <div
          className="flex px-1 justify-between"
          style={styles.reminder(r.color)}
          key={`${i}`}
        >
          <span className="text-sm">{r.title}</span>
          <span className="text-sm">({duration(r.from, r.to)})</span>
        </div>
      ))}
    </div>
  );
}
