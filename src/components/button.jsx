export default function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg w-40 md:w-2xs cursor-pointer dark:text-[#ededed] ${className}`}
    >
      {children}
    </button>
  );
}
