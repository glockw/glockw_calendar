import {
  CLOSE_DIALOG,
  CREATE_REMINDER,
  LAUNCH_CREATE_DIALOG,
  NEXT_DATE,
  PREV_DATE,
  SET_DATE,
  UPDATE_REMINDER,
} from "../actions/action";
import { daysOfMonth } from "../services/time";

const initialState = {
  month: daysOfMonth(),
  isLoading: false,
  showReminder: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return { ...state, showReminder: false };
    case LAUNCH_CREATE_DIALOG:
      return {
        ...state,
        day: action.day,
        reminder: action.reminder,
        showReminder: true,
      };
    case SET_DATE:
      return {
        ...state,
        day: action.day,
      };
    case PREV_DATE:
      return {
        ...state,
        day: state.month.flat()[action.index - 1],
      };
    case NEXT_DATE:
      return {
        ...state,
        day: state.month.flat()[action.index + 1],
      };
    case PREV_DATE:
      return {
        ...state,
      };
    case CREATE_REMINDER:
      let { id, day } = action;
      debugger;
      const nMonth = state.month.flat().map((d) => (d.id == id ? day : d));
      return {
        ...state,
        day,
        showReminder: false,
        month: [
          nMonth.slice(0, 7),
          nMonth.slice(7, 14),
          nMonth.slice(14, 21),
          nMonth.slice(21, 28),
          nMonth.slice(28),
        ],
      };

    //   const date = state.month.find((d) => d.date === day);
    //   if (!date) return state;
    //   date.reminders = date.reminders.concat(reminder);

    //   return {
    //     ...state,
    //     isLoading: false,
    //     showReminder: false,
    //     month: state.month.map((s) => (s.date == day.date ? date : s)),
    //   };
    case UPDATE_REMINDER:
      return state;
    //   let { r, reminder } = action;

    //   const date = state.month.find((d) => d.date === r);
    //   if (!date) return state;
    //   date.reminders = date.reminders.map((r) => r.from == reminder.from);

    //   return {
    //     ...state,
    //     isLoading: false,
    //     showReminder: false,
    //     month: state.month.map((s) => (s.date == r.date ? date : s)),
    //   };

    default:
      return state;
  }
};

export { reducer, initialState };
