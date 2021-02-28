export default function ClockIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0  24 24"
      stroke="currentColor"
      id="clock"
      className="w-8 h-8 text-cool-gray-400 dark:text-cool-gray-400 group-hover:text-purple-600 group-focus:text-purple-600 dark:group-hover:text-purple-50 dark:group-focus:text-purple-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}
