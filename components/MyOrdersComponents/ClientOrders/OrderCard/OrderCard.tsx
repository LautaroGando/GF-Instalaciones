import IOrder from "@/interfaces/IOrder";
import Link from "next/link";
import React from "react";
import OrderProgressBar from "@/components/ui/MyOrdersComponents/ClientOrders/OrderProgressBar/OrderProgressBar";
import OrderInstallationsLink from "@/components/ui/MyOrdersComponents/ClientOrders/OrderInstallationsLink/OrderInstallationsLink";
import OrderSummaryInfo from "@/components/ui/MyOrdersComponents/ClientOrders/OrderSummaryInfo/OrderSummaryInfo";
import OrderStatusHeader from "@/components/ui/MyOrdersComponents/ClientOrders/OrderStatusHeader/OrderStatusHeader";
import clsx from "clsx";

const OrderCard: React.FC<{ order: IOrder }> = ({ order }) => {
  const [completed, total] = order.installationsFinished.split("/").map(Number);
  const orderIsCompleted = order.completed;
  const toReview = !orderIsCompleted && order.progress === "100.00";

  return (
    <Link
      href={`/my-orders/${order.id}`}
      title={`Ver detalles de la orden: ${order.title}`}
      aria-label={`Ver detalles de la orden: ${order.title}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 
      bg-white shadow-sm transition-all duration-300 ease-in-out 
      hover:shadow-md active:scale-95 hover:scale-[1.015]
      dark:bg-[#0e0e0e] dark:border-white/10 dark:text-white dark:shadow-[0_4px_20px_rgba(255,255,255,0.04)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.05)]"
    >
      <div
        className={clsx(
          "p-5 flex flex-col gap-4 border-t-[8px]",
          orderIsCompleted
            ? "border-admin-activeColor"
            : toReview
            ? "border-admin-editColor"
            : "border-primaryColor"
        )}
      >
        <OrderStatusHeader orderIsCompleted={orderIsCompleted} toReview={toReview} order={order} />
        <OrderSummaryInfo order={order} />
        <OrderProgressBar completed={completed} total={total} toReview={toReview} />
        <OrderInstallationsLink orderIsCompleted={orderIsCompleted} toReview={toReview} />
      </div>
    </Link>
  );
};

export default OrderCard;
