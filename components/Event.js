import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LAUNCH_DIALOG } from "../actions/action";
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
  const duration = height * 15;
  let durationMessage = duration > 45 ? `${duration / 60}h` : `${duration}min`;
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

  return (
    <div
      onClick={edit}
      style={styles.event(height, color)}
      className={`rounded-lg  px-2 pb-1  ml-4   text-gray-100  ring-4 ring-black`}
    >
      <div className="flex">
        <h2 className="text-left text-lg">
          {title} ({durationMessage})
        </h2>
      </div>

      <LocationIcon text={city} />
    </div>
  );
}

export default memo(EventComponent);
