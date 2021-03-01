export default function ArrowButton({ direction = PREV }) {
  const path = direction == PREV ? PREV_DIR : NEXT_DIR;
  return (
    <button
      type="button"
      className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-300 p-1 items-center"
    >
      <svg
        className="h-6 w-6 text-gray-500 inline-flex leading-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={path}
        ></path>
      </svg>
    </button>
  );
}

export const PREV = "PREV";
export const NEXT = "NEXT";
const PREV_DIR = "M15 19l-7-7 7-7";
const NEXT_DIR = "M9 5l7 7-7 7";
