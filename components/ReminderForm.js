import { useDispatch, useSelector } from "react-redux";
import { createReminder } from "../actions/action";
import { useInput } from "../hooks/useInput";
import { useRequiredInput } from "../hooks/useRequiredInput";
import { useTime } from "../hooks/useTime";
import FromTo from "./FromTo";
import InputForm from "./InputForm";
import ReminderHeader from "./ReminderHeader";

export default function RemainderForm() {
  const { id } = useSelector((state) => state);
  const dispatch = useDispatch();
  const timeSettings = useTime();
  const cityInput = useInput("");
  const colorInput = useInput("#000000");

  const { input: titleInput, error, isInvalid } = useRequiredInput({
    initial: "",
  });

  const save = (_) => {
    let { value: color } = colorInput;
    let { value: title } = titleInput;
    let { value: city } = cityInput;
    let { from, to, fromHour, toHour } = timeSettings;
    if (isInvalid()) {
      return;
    }
    const reminder = {
      title,
      color,
      city,
      from,
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
