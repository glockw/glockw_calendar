import {
  CLOSE_DIALOG,
  CREATE_REMINDER,
  DELETE_REMINDER,
  LAUNCH_DIALOG,
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

    case LAUNCH_DIALOG:
      return {
        ...state,
        day: action.day,
        reminder: action.reminder,
        update: action.update,
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

    case CREATE_REMINDER:
    case UPDATE_REMINDER:
    case DELETE_REMINDER:
      let { id, day } = action;
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

    default:
      return state;
  }
};

export { reducer, initialState };
