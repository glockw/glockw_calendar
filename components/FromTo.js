import ClockIcon from "./ClockIcon";

export default function FromTo({ settings }) {
  const { from, to, fromHour, toHour, setFrom, setTo } = settings;

  return (
    <div className="flex p-2  justify-start">
      <div className="h-10 p-2">
        <ClockIcon />
      </div>
      <div>
        <input
          className="mt-1 block w-40 h-10  text-center rounded-md bg-gray-100  border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          value={fromHour}
          readOnly
        />
        <input
          className="mt-1 block w-40 h-10"
          type="range"
          min={0}
          max={94}
          value={from}
          onChange={setFrom}
        />
      </div>

      <span className="p-2 text-lg h-20 text-gray-500"> - </span>
      <div>
        <input
          readOnly
          className="mt-1 block w-40 h-10  text-center rounded-md bg-gray-100  border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          value={toHour}
        />
        <input
          className="mt-1 block w-40 h-10"
          type="range"
          min={0}
          max={95}
          value={to}
          onChange={setTo}
        />
      </div>
    </div>
  );
}
