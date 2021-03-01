import { useDispatch, useSelector } from "react-redux";
import { createReminder } from "../actions/action";
import { useInput } from "../hooks/useInput";
import { useRequiredInput } from "../hooks/useRequiredInput";
import { useTime } from "../hooks/useTime";
import FromTo from "./FromTo";
import InputForm from "./InputForm";
import ReminderHeader from "./ReminderHeader";

export default function RemainderForm() {
  const {
    day: { id },
    reminder: { from, title, color, city },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const timeSettings = useTime(from);
  const cityInput = useInput(city);
  const colorInput = useInput(color);

  const { input: titleInput, error, isInvalid } = useRequiredInput({
    initial: title,
  });

  const save = (_) => {
    let { value: color } = colorInput;
    let { value: title } = titleInput;
    let { value: city } = cityInput;
    let { from, to, fromHour } = timeSettings;
    if (isInvalid()) {
      return;
    }
    const reminder = {
      title,
      color,
      city,
      from,
      fromHour,
      to,
    };
    dispatch(createReminder(id, reminder));
  };

  const settings = {
    error,
    errorMessage: "Title is Required!.",
    ...titleInput,
    maxLength: 30,
    type: "text",
    placeholder: "Add Title",
  };

  const citySettings = {
    ...cityInput,
    maxLength: 50,
    type: "text",
    placeholder: "Add City",
  };
  return (
    <div>
      <ReminderHeader />
      <InputForm {...settings} />
      <FromTo settings={timeSettings} />
      <InputForm {...citySettings} />

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
