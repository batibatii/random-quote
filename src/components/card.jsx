export default function Card({ children }) {
  return (
    <div className="w-[360px] h-[400px] pt-24 pl-12 pr-12 gap-2  md:w-xl md:h-72 bg-card dark:bg-accent-foreground md:pl-12 md:pr-12 md:pt-12 md:pb-4 rounded-lg flex flex-col shadow-2xl border border-border">
      {children}
    </div>
  );
}
