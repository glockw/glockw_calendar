import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReminder, LAUNCH_DIALOG } from "../actions/action";
import { duration } from "../services/time";
import LocationIcon from "./LocationIcon";
const styles = {
  event: (h, color) => ({
    height: `${h * 3.5 - 0.1}rem`,
    top: 0,
    width: "40%",
    backgroundColor: color,
    opacity: 0.8,
    position: "relative",
    zIndex: 10,
  }),
};

function EventComponent({ id, from, to, color, title, city = "DR" }) {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state);
  const height = to - from;
  let durationMessage = duration(from, to);
  const edit = () => {
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

  const del = () => {
    dispatch(deleteReminder(day.id, { id }));
  };

  return (
    <div
      style={styles.event(height, color)}
      className={`rounded-lg  px-2 pb-1  ml-4 event  text-gray-100  ring-4 ring-black`}
    >
      <div className="flex  event justify-between">
        <h2 className="text-left text-lg">
          {title} ({durationMessage})
        </h2>

        <div className="flex  items-center">
          <button className="cursor-pointer w-6" onClick={edit}>
            <svg
              className="w-6 h-6 trash hover:bg-transparent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button onClick={del}>
            <svg
              className="w-6 h-6 trash hover:bg-transparent"
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
      </div>

      <LocationIcon text={city} />
    </div>
  );
}

export default memo(EventComponent);
