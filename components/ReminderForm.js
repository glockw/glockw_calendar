import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_DIALOG,
  createReminder,
  updateReminder,
} from "../actions/action";
import { useInput } from "../hooks/useInput";
import { useRequiredInput } from "../hooks/useRequiredInput";
import { useTime } from "../hooks/useTime";
import FromTo from "./FromTo";
import InputForm from "./InputForm";
import ReminderHeader from "./ReminderHeader";

export default function RemainderForm() {
  const {
    update,
    day: { id },
    reminder: { id: reminderId, from, to, title, color, city },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const timeSettings = useTime(from, to);
  const colorInput = useInput(color);

  const {
    input: titleInput,
    error,
    isInvalid: invalidTitle,
  } = useRequiredInput({
    initial: title,
  });

  const {
    input: cityInput,
    error: cityError,
    isInvalid: invalidCity,
  } = useRequiredInput({
    initial: city,
  });

  const validations = [invalidCity, invalidTitle];

  const save = (_) => {
    let { value: color } = colorInput;
    let { value: title } = titleInput;
    let { value: city } = cityInput;
    let { from, to, fromHour } = timeSettings;
    if (validations.some((v) => v())) {
      return;
    }
    const reminder = {
      id: reminderId,
      title,
      color,
      city,
      from,
      fromHour,
      to,
    };

    const action = update ? updateReminder : createReminder;
    dispatch(action(id, reminder));
  };

  const close = (_) =>
    dispatch({
      type: CLOSE_DIALOG,
    });
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
    error: cityError,
    errorMessage: "City is Required!.",
    placeholder: "Add City",
  };
  return (
    <div>
      <ReminderHeader />
      <br />
      <InputForm {...settings} />
      <FromTo settings={timeSettings} />
      <InputForm {...citySettings} />
      <br />

      <label className="block">
        <input {...colorInput} className="input-form" type="color" />
      </label>

      <div className="flex justify-end py-2 inline-block mr-2 mt-2">
        <button type="button" onClick={close} className="close-button">
          Close
        </button>

        <button onClick={save} type="button" className="save-button">
          {`${update ? "Update" : "Add"}`}
        </button>
      </div>
    </div>
  );
}
