import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Order #{id}</h2>

        <div className="space-x-4">
          {priority && (
            <span
              title="Order to be delivered in approximately 20% less time than usual"
              className="cursor-help select-none rounded-full bg-red-500/50 px-3 py-1 text-sm font-semibold uppercase tracking-wide ring-2 ring-red-700/50 ring-offset-2"
            >
              Priority
            </span>
          )}
          <span className="select-none rounded-full bg-green-500/50 px-3 py-1 text-sm font-semibold uppercase tracking-wide ring-2 ring-green-700/50 ring-offset-2">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-md bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-y">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 rounded-md bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // params.orderId - orderId is the name of param that we gave in router object /order/:orderId
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
