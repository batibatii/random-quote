export default function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg p-2 md:p-3 mt-4 w-32 md:mt-0 md:w-2xs cursor-pointer dark:text-[#ededed] ${className}`}
    >
      {children}
    </button>
  );
}
