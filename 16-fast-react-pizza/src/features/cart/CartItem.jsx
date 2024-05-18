import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <span>
          <span className="rounded-full bg-yellow-500 px-2 py-1 text-sm font-black text-stone-50">
            {quantity}
          </span>{" "}
          &times;
        </span>{" "}
        {name}
      </p>
      <div className="flex items-center justify-between gap-5">
        <p className="text-sm font-bold sm:border-r sm:border-stone-200 sm:pr-6">
          {formatCurrency(totalPrice)}
        </p>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
