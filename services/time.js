const moment = require("moment");

const GRID_LEN = 35;
const getMonth = (_) => moment().month();

const daysInMonth = (_) => moment().daysInMonth();

const hourRange = (gt) => {
  const minutes = new Array(60)
    .fill(0)
    .map((s, i) => i)
    .filter((i) => !(i % 15));
  const hours = new Array(24).fill(0).map((_, i) => i);
  const format = (h) => (h < 10 ? `0${h}` : h);

  const time = hours.map((h) =>
    minutes.map((m) => `${format(h)}:${format(m)}`)
  );

  return time.flat();
};

const startAndEndOfMonth = (_) => ({
  start: moment().clone().startOf("month").day(),
  end: moment().clone().endOf("month").day(),
});

const prev = () => moment().add(-1, "month");
const next = () => moment().add(1, "month");

const getPastMonthDay = () => {
  let { start } = startAndEndOfMonth();
  let daysBack = [];
  let prevM = prev();
  let prevMonth = prevM.month();
  let pastMonthDays = prevM.daysInMonth();
  let year = prevM.year();
  while (start > 0) {
    daysBack = daysBack.concat({
      id: `${prevMonth}-${pastMonthDays}`,
      index: pastMonthDays,
      date: new Date(year, prevMonth, pastMonthDays),
      current: false,
      reminders: [],
    });
    pastMonthDays -= 1;
    start -= 1;
  }
  return daysBack.reverse();
};
const daysOfMonth = () => {
  const month = dateGenerator(daysInMonth(), getMonth(), moment().year());
  const back = getPastMonthDay();
  const front = dateGenerator(
    GRID_LEN - month.length - back.length,
    next().month(),
    next().year()
  );
  const ret = [...back, ...month, ...front];
  return [
    ret.slice(0, 7),
    ret.slice(7, 14),
    ret.slice(14, 21),
    ret.slice(21, 28),
    ret.slice(28),
  ];
};

const dateGenerator = (days, month, year) => {
  const today = new Date().toDateString();
  return new Array(days).fill(0).map((_, index) => {
    const date = new Date(year, month, index + 1);
    return {
      id: `${month}-${index}`,
      index: index + 1,
      date,
      current: date.toDateString() === today,
      reminders: [],
    };
  });
};

export { daysOfMonth, hourRange };
