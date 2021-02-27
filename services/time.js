const moment = require("moment");

const getMonth = (_) => moment().month;

const daysInMonth = (_) => moment().daysInMonth();
const startAndEndOfMonth = (_) => ({
  start: moment().clone().startOf("month").day(),
  end: moment().clone().endOf("month").day(),
});

export { getMonth, daysInMonth, startAndEndOfMonth };
