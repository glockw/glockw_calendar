import "@tailwindcss/forms";
import FromTo from "./FromTo";
import ReminderHeader from "./ReminderHeader";

export default function RemainderForm() {
  return (
    <div>
      <ReminderHeader />
      <label className="block">
        <input type="text" className="input-form" placeholder="Add Title" />
      </label>

      <FromTo />
      <label className="block">
        <input className="input-form" type="color" />
      </label>

      <label className="block">
        <input type="text" placeholder="Add City" className="input-form" />
      </label>
    </div>
  );
}
