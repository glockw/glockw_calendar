import Layout from "../../components/Layout";
import ReminderHeader from "../../components/ReminderHeader";
import { hourRange } from "../../services/time";

export default function DateComponent() {
  const hours = hourRange();

  const reminders = [
    {
      title: "hola",
      from: 3,
      fromHour: "00:45",
      color: "red",
      to: 7,
    },
    {
      title: "adios",
      from: 3,
      fromHour: "00:45",
      color: "green",
      to: 8,
    },
    {
      title: "adiommgs",
      from: 3,
      fromHour: "00:45",
      color: "blue",
      to: 6,
    },
    {
      title: "adiommgs",
      from: 3,
      fromHour: "01:00",
      color: "blue",
      to: 6,
    },
  ];
  const styles = {
    event: (h, color) => ({
      height: `${h * 2.5 - 0.2}rem`,
      top: 1,
      width: "60%",
      backgroundColor: color,
      opacity: 0.8,
    }),
  };

  return (
    <Layout>
      <div className="mx-auto w-2/3 bg-white m-3  rounded-lg h-5/6 overflow-y-auto ">
        <div className="sticky top-0 z-20 bg-gray-200 w-full p-2 text-xl text-center">
          <ReminderHeader />
          {new Date().toDateString()}
        </div>

        <div className="mx-auto divide-y p-2  overflow-x-auto flex-col ">
          {hours.map((h, i) => (
            <div className="relative w-full h-10" key={h}>
              {h}

              {reminders
                .filter((s) => s.fromHour == h)
                .map((s, i) => {
                  return (
                    <div
                      key={`event__${i}`}
                      style={styles.event(s.to - s.from, s.color)}
                      className={`bg-indigo-500 rounded-lg z-10 sm:w-screen  absolute  left-${
                        20 + 20 * i
                      }`}
                    >
                      {s.title}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
