import { useSelector } from "react-redux";
import Dialog from "./Dialog";
import RemainderForm from "./ReminderForm";

export default function Layout({ children }) {
  const { showReminder } = useSelector((state) => state);
  return (
    <>
      <Dialog show={showReminder}>
        <RemainderForm />
      </Dialog>
      <div className="mx-auto flex flex-wrap items-center h-screen">
        {children}
      </div>
    </>
  );
}
