export default function Card({ children }) {
  return (
    <div className="w-screen md:w-xl bg-slate-200 pl-12 pr-12 pt-12 pb-4 rounded-lg flex flex-col shadow-2xl border border-slate-300">
      {children}
    </div>
  );
}
