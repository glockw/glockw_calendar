import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReminder, LAUNCH_DIALOG } from "../actions/action";
import { duration } from "../services/time";
import EditIcon from "./icons/EditIcon";
import LocationIcon from "./icons/LocationIcon";
import TrashIcon from "./icons/TrashIcon";
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
            <EditIcon />
          </button>

          <button onClick={del}>
            <TrashIcon />
          </button>
        </div>
      </div>

      <LocationIcon text={city} />
    </div>
  );
}

export default memo(EventComponent);
