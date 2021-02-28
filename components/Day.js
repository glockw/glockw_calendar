export default function Day({ index, current }) {
  return <div className={current ? "day_current" : "day-tile"}>{index}</div>;
}
