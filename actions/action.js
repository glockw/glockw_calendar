const CREATE_REMINDER = "CREATE_REMINDER";
const UPDATE_REMINDER = "UPDATE_REMINDER";
const CLOSE_DIALOG = "CLOSE_DIALOG";
const OPEN_DIALOG = "OPEN_DIALOG";

export { CREATE_REMINDER, UPDATE_REMINDER, CLOSE_DIALOG, OPEN_DIALOG };
export { createReminder };

const createReminder = (id, reminder) => (dipatch, useStore) => {
  const { month } = useStore();
  const date = month.flat().find((d) => d.id == id);
  if (date.reminders.length === 0) {
    date.reminders = date.reminders.concat({ ...reminder, id: 1 });
  } else {
    const max = Math.max(...date.reminders.map((r) => r.id));
    date.reminders = date.reminders.concat({ ...reminder, id: max + 1 });
  }
  dipatch({
    type: CREATE_REMINDER,
    id,
    date,
  });
};
