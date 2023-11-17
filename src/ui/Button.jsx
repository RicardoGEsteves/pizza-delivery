import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    " inline-block rounded-full bg-teal-500 font-semibold uppercase tracking-wide text-slate-900 transition-colors duration-300 hover:bg-teal-400 focus:bg-teal-400 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-offset-0 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " text-sm px-4 py-2 md:px-6 md:py-4 ",
    secondary:
      " inline-block rounded-full text-sm px-4 py-2 md:px-6 md:py-3.5 border-2 border-slate-300 font-semibold uppercase tracking-wide text-slate-400 transition-colors duration-300 hover:bg-slate-300 hover:text-slate-800  focus:outline-none focus:ring focus:ring-slate-200 focus:ring-offset-0 disabled:cursor-not-allowed ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
