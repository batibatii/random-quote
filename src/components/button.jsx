export default function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg w-2xs cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
