export default function Day({ index, current = true }) {
  return <div className={current ? "day_current" : "day-tile"}>{index}</div>;
}
