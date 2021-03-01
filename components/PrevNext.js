import ArrowButton, { NEXT, PREV } from "./ArrowButton";

export default function PrevNext({ next = (f) => f, prev = (f) => f }) {
  return (
    <div className="border rounded-lg px-1" style={{ paddingTop: "2px" }}>
      <ArrowButton onClick={prev} direction={PREV} />
      <div className="border-r inline-flex h-6"></div>
      <ArrowButton onClick={next} direction={NEXT} />
    </div>
  );
}
