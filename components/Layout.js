import Dialog from "./Dialog";
import RemainderForm from "./ReminderForm";

export default function Layout({ children }) {
  return (
    <>
      <Dialog show={true}>
        <RemainderForm />
      </Dialog>
      <div className="mx-auto flex flex-wrap items-center h-screen">
        {children}
      </div>
    </>
  );
}
