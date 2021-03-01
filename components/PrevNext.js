import ArrowButton, { NEXT, PREV } from "./ArrowButton";

export default function PrevNext() {
  return (
    <div className="border rounded-lg px-1" style={{ paddingTop: "2px" }}>
      <ArrowButton direction={PREV} />
      <div className="border-r inline-flex h-6"></div>
      <ArrowButton direction={NEXT} />
    </div>
  );
}
