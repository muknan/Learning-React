import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest hover:text-stone-600 sm:text-xl">
        <div className="flex items-center justify-center gap-2">
          <img src="/logo.png" alt="React Pizzeria Logo" className="h-10" />
          <span>React Pizzeria</span>
        </div>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
