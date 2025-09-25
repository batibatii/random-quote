export enum TextAlign  {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
};

interface TitleProps {
  label: string,
  align: TextAlign
}

export function Title({ label, align }: TitleProps) {
  const alignText = () => {
    switch (align) {
      case TextAlign.CENTER:
        return "text-center";
      case TextAlign.LEFT:
        return "text-start";
      case TextAlign.RIGHT:
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
