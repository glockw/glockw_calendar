const moment = require("moment");

const GRID_LEN = 35;
const SATURDAY = 6;
const getMonth = (_) => moment().month;

const daysInMonth = (_) => moment().daysInMonth();

const startAndEndOfMonth = (_) => ({
  start: moment().clone().startOf("month").day(),
  end: moment().clone().endOf("month").day(),
});

const prev = () => moment().add(-1, "month");
const next = () => moment().add(1, "month");

const daysOfMonth = () => {
  let { start } = startAndEndOfMonth();
  let daysBack = [];
  let pastMonthDays = prev().daysInMonth();
  while (start > 0) {
    daysBack = daysBack.concat(pastMonthDays);
    pastMonthDays -= 1;
    start -= 1;
  }
  const month = generateMonth(daysInMonth());

  const front = generateMonth(35 - month.length - daysBack.length);
  const ret = [...daysBack.reverse(), ...month, ...front];
  return [
    ret.slice(0, 7),
    ret.slice(7, 14),
    ret.slice(14, 21),
    ret.slice(21, 28),
    ret.slice(28),
  ];
};

const generateMonth = (total) =>
  new Array(total).fill(0).map((_, index) => index + 1);

export { getMonth, daysInMonth, startAndEndOfMonth, daysOfMonth };
