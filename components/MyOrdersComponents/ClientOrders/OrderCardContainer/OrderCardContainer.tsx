import IOrder from "@/interfaces/IOrder";
import React from "react";
import OrderCard from "../OrderCard/OrderCard";

const OrderCardContainer: React.FC<{ orders: IOrder[] }> = ({ orders }) => {
  return (
    <section className="flex flex-col gap-7 md:grid md:grid-cols-2 xl:grid-cols-3">
      {orders.map((order, i) => (
        <OrderCard order={order} key={i} />
      ))}
    </section>
  );
};

export default OrderCardContainer;
