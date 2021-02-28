import "@tailwindcss/forms";
import { useDispatch, useSelector } from "react-redux";
import { createReminder } from "../actions/action";
import { useInput } from "../hooks/useInput";
import { useTime } from "../hooks/useTime";
import FromTo from "./FromTo";
import ReminderHeader from "./ReminderHeader";

export default function RemainderForm() {
  const { id } = useSelector((state) => state);
  const dispatch = useDispatch();

  const timeSettings = useTime();
  const titleInput = useInput("");
  const cityInput = useInput("");
  const colorInput = useInput("#000000");
  const save = (_) => {
    let { value: color } = colorInput;
    let { value: title } = titleInput;
    let { value: city } = cityInput;
    let { from, to, fromHour, toHour } = timeSettings;

    const reminder = {
      title,
      color,
      city,
      from,
      to,
    };
    dispatch(createReminder(id, reminder));
  };
  return (
    <div>
      <ReminderHeader />
      <label className="block">
        <input
          {...titleInput}
          type="text"
          className="input-form"
          placeholder="Add Title"
        />
      </label>

      <FromTo settings={timeSettings} />

      <label className="block">
        <input
          {...cityInput}
          type="text"
          placeholder="Add City"
          className="input-form"
        />
      </label>

      <label className="block">
        <input {...colorInput} className="input-form" type="color" />
      </label>

      <div className="flex justify-end py-2 inline-block mr-2 mt-2">
        <button onClick={save} type="button" className="save-button">
          Add
        </button>
      </div>
    </div>
  );
}
