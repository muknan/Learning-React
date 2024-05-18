import { Link } from "react-router-dom";

function Button({ children, disabled = false, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    warning:
      "inline-block text-sm rounded-full bg-red-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 sm:py-4",
    primary: base + " px-4 py-3 md:px-6 sm:py-4",
    small:
      base +
      " px-3 py-2 text-xs tracking-normal md:tracking-wide md:px-3.5 md:py-2.5",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-200 hover:bg-stone-300/25 hover:text-stone-600 focus:bg-stone-300/25 focus:text-stone-600 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-[10.6px] md:px-6 sm:py-[14.6px]",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
