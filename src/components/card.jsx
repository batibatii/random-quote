export default function Card({ children }) {
  return (
    <div className="w-[380px] h-[400px] pt-24 pl-10 pr-10 gap-2  md:w-xl md:h-72 bg-card dark:bg-slate-900 md:pl-12 md:pr-12 md:pt-12 md:pb-4 rounded-lg flex flex-col shadow-2xl shadow-gray-500/20 dark:shadow-none border border-border">
      {children}
    </div>
  );
}
