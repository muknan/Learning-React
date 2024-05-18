import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1.5 py-3">
      <div className="flex items-center justify-between gap-4">
        <p>
          <span>
            <span className="rounded-full bg-yellow-500 px-2 py-1 text-sm font-black text-stone-50">
              {quantity}
            </span>{" "}
            &times;
          </span>{" "}
          {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
