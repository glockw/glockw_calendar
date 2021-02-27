const moment = require("moment");

const GRID_LEN = 35;
const getMonth = (_) => moment().month();

const daysInMonth = (_) => moment().daysInMonth();

const startAndEndOfMonth = (_) => ({
  start: moment().clone().startOf("month").day(),
  end: moment().clone().endOf("month").day(),
});

const prev = () => moment().add(-1, "month");
const next = () => moment().add(1, "month");

const currentD = () => moment().date();

getPastMonthDay = () => {
  let { start } = startAndEndOfMonth();
  let daysBack = [];
  let prevM = prev();
  let prevMonth = prevM.month();
  let pastMonthDays = prevM.daysInMonth();
  let year = prevM.year();
  while (start > 0) {
    daysBack = daysBack.concat({
      index: pastMonthDays,
      date: moment(`${prevMonth}-${pastMonthDays}-${year}`),
      current: false,
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
    GRID_LEN - month.length - daysBack.length,
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

const dateGenerator = (days, month, year) =>
  new Array(days).fill(0).map((_, index) => ({
    index: index + 1,
    date: moment(`${month}-${index + 1}-${year}`),
    current: index + 1 === moment().date(),
  }));

export { getMonth, daysInMonth, startAndEndOfMonth, daysOfMonth, currentD };
