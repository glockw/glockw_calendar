import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LAUNCH_DIALOG } from "../actions/action";
import { duration } from "../services/time";
import LocationIcon from "./LocationIcon";
const styles = {
  event: (h, color) => ({
    height: `${h * 3.5 - 0.1}rem`,
    top: 0,
    width: "40%",
    backgroundColor: color,
    opacity: 0.8,
    cursor: "pointer",
    position: "relative",
    zIndex: 10,
  }),
};

function EventComponent({ id, from, to, color, title, city = "DR" }) {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state);
  const height = to - from;
  let durationMessage = duration(from, to);
  const edit = (e) => {
    const { classList } = e.target;
    if (classList.toString().indexOf("trash") >= 0) return;
    dispatch({
      type: LAUNCH_DIALOG,
      update: true,
      day,
      reminder: {
        id,
        from,
        to,
        city,
        color,
        title,
      },
    });
  };

  const deleteReminder = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={edit}
      style={styles.event(height, color)}
      className={`rounded-lg  px-2 pb-1  ml-4 event  text-gray-100  ring-4 ring-black`}
    >
      <div className="flex  event justify-between">
        <h2 className="text-left text-lg">
          {title} ({durationMessage})
        </h2>
        <button onClick={deleteReminder}>
          <svg
            className="w-6 h-6 trash"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>

      <LocationIcon text={city} />
    </div>
  );
}

export default memo(EventComponent);
