import EventComponent from "../../components/Event";
import Layout from "../../components/Layout";
import PrevNext from "../../components/PrevNext";
import ReminderHeader from "../../components/ReminderHeader";
import { hourRange } from "../../services/time";

export default function DateComponent() {
  const hours = hourRange();

  const reminders = [
    {
      id: 1,
      title: "hola",
      from: 0,
      fromHour: "00:00",
      color: "red",
      to: 1,
    },
    {
      id: 2,
      title: "adios",
      from: 3,
      fromHour: "00:30",
      color: "green",
      to: 8,
    },
    {
      id: 3,
      title: "adiommgs",
      from: 3,
      fromHour: "00:30",
      color: "blue",
      to: 6,
    },
    {
      id: 4,
      title: "adiommgs",
      from: 0,
      fromHour: "00:45",
      color: "blue",
      to: 6,
    },
    {
      id: 6,
      title: "adiommgs",
      from: 0,
      fromHour: "00:45",
      color: "blue",
      to: 6,
    },
  ];

  return (
    <Layout>
      <div className="mx-auto w-2/3 bg-white m-3  rounded-lg h-5/6 overflow-y-auto ">
        <div className="sticky top-0 z-20 bg-gray-200 w-full p-2 text-xl text-center">
          <ReminderHeader />
          {new Date().toDateString()}
          <PrevNext />
        </div>

        <div className="mx-auto divide-y p-2  overflow-x-auto flex-col ">
          {hours.map((h, i) => (
            <div className="flex w-full  h-10" key={h}>
              <span className="mr-4">{h}</span>

              {reminders
                .filter((s) => s.fromHour == h)
                .map((s, i) => {
                  return (
                    <EventComponent key={s.id} {...s} left={20 + i * 20} />
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
