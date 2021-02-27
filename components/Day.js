import { currentD } from "../services/time";

export default function Day({ index, current }) {
  const today = currentD();

  return <div className={current ? "day_current" : "day-tile"}>{index}</div>;
}
