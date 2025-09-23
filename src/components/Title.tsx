export const align = {
  center: "center",
  left: "left",
  right: "right",
};

interface TitleProps {
  label: string,
  align:string
}

export function Title({ label, align }: TitleProps) {
  const alignText = () => {
    switch (align) {
      case "center":
        return "text-center";
      case "left":
        return "text-start";
      case "right":
        return "text-end";
      default:
        console.error("No suitable setting is found for", align);
    }
  };
  return (
    <h2 className={`font-bold dark:text-primary text-xl ${alignText()}`}>
      {label}
    </h2>
  );
}
