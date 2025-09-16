export default function Card({ children }) {
  return (
    <div className="w-[360px]  md:w-xl bg-card dark:bg-accent-foreground pl-12 pr-12 pt-12 pb-4 rounded-lg flex flex-col shadow-2xl border border-border">
      {children}
    </div>
  );
}
