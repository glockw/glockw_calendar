export default function Layout({ children }) {
  return (
    <div className="mx-auto flex flex-wrap items-center h-screen">
      {children}
    </div>
  );
}
