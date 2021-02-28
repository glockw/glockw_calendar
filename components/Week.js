import Day from "./Day";
export default function Week({ days }) {
  return (
    <div className="flex items-center">
      {days.map((day, index) => (
        <Day key={`Day__${index}`} {...day} />
      ))}
    </div>
  );
  x;
}
