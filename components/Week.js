import Day from "./Day";
export default function Week() {
  return (
    <div className="flex items-center">
      {new Array(7).fill(0).map((_, index) => (
        <Day key={`Day__${index}`} index={index} />
      ))}
    </div>
  );
}
