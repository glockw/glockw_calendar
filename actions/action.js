const CREATE_REMINDER = "CREATE_REMINDER";
const UPDATE_REMINDER = "UPDATE_REMINDER";
const CLOSE_DIALOG = "CLOSE_DIALOG";
const LAUNCH_CREATE_DIALOG = "LAUNCH_CREATE_DIALOG";
const NEXT_DATE = "NEXT_DATE";
const PREV_DATE = "PREV_DATE";
const SET_DATE = "SET_DATE";
export {
  CREATE_REMINDER,
  UPDATE_REMINDER,
  CLOSE_DIALOG,
  LAUNCH_CREATE_DIALOG,
  NEXT_DATE,
  PREV_DATE,
  SET_DATE,
};
export { createReminder, setDate };

const setDate = (id) => (dispatch, useStore) => {
  const { month } = useStore();
  const day = month.flat().find((d) => d.id == id);
  dispatch({
    type: SET_DATE,
    day,
  });
};
const createReminder = (id, reminder) => (dipatch, useStore) => {
  const { month } = useStore();
  const date = month.flat().find((d) => d.id === id);
  if (date.reminders.length === 0) {
    date.reminders = date.reminders.concat({ ...reminder, id: 1 });
  } else {
    const max = Math.max(...date.reminders.map((r) => r.id));
    date.reminders = date.reminders.concat({ ...reminder, id: max + 1 });
  }
  dipatch({
    type: CREATE_REMINDER,
    id,
    day: date,
  });
};
