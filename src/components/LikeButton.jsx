import { useQuotes } from "@/app/QuotesContext";

export default function LikeButton({ onClick, children }) {
  const { quotesWithLikes, currentQuoteIndex } = useQuotes();

  const getLikeButtonColors = (likeCount) => {
    if (likeCount > 0) {
      return {
        fill: "red",
        stroke: "red",
      };
    }
    return {
      fill: "#FFF",
      stroke: "#334155",
    };
  };

  const colors = getLikeButtonColors(
    quotesWithLikes[currentQuoteIndex].likeCount
  );

  return (
    <button onClick={onClick} className="w-10 cursor-pointer mr-2 md:mr-0">
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth="2"
        aria-label="Like this quote"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
