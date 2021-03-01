import { memo } from "react";
import LocationIcon from "./LocationIcon";
const styles = {
  event: (h, color) => ({
    height: `${h * 3.5 - 0.1}rem`,
    top: 0,
    width: "40%",
    backgroundColor: color,
    opacity: 0.8,
    cursor: "pointer",
  }),
};

function EventComponent({ from, to, color, title, city = "DR" }) {
  const height = to - from;
  const duration = height * 15;
  let durationMessage = duration > 45 ? `${duration / 60}h` : `${duration}min`;

  return (
    <div
      style={styles.event(height, color)}
      className={`rounded-lg relative z-10   px-2 pb-1  ml-4   text-gray-100  ring-4 ring-black`}
    >
      <h2 className="text-left text-lg">
        {title} ({durationMessage})
      </h2>
      <LocationIcon text={city} />
    </div>
  );
}

export default memo(EventComponent);
