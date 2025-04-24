import IOrder from "@/interfaces/IOrder";
import Link from "next/link";
import React from "react";
import OrderProgressBar from "@/components/ui/MyOrdersComponents/ClientOrders/OrderProgressBar/OrderProgressBar";
import OrderInstallationsLink from "@/components/ui/MyOrdersComponents/ClientOrders/OrderInstallationsLink/OrderInstallationsLink";
import OrderSummaryInfo from "@/components/ui/MyOrdersComponents/ClientOrders/OrderSummaryInfo/OrderSummaryInfo";
import OrderStatusHeader from "@/components/ui/MyOrdersComponents/ClientOrders/OrderStatusHeader/OrderStatusHeader";
import OrderStatusBar from "@/components/ui/MyOrdersComponents/ClientOrders/OrderStatusBar/OrderStatusBar";

const OrderCard: React.FC<{ order: IOrder }> = ({ order }) => {
  const [completed, total] = order.installationsFinished.split("/").map(Number);
  const orderIsCompleted = order.completed;

  return (
    <Link
      href={`/my-orders/${order.id}`}
      title={`Ver detalles de la orden: ${order.title}`}
      aria-label={`Ver detalles de la orden: ${order.title}`}
      className="group block rounded-[8px] border border-gray-200 overflow-hidden 
                 shadow-[0_4px_4px_rgba(0,0,0,0.1)] transition-all duration-300
                 hover:shadow-lg active:scale-95 cursor-pointer"
    >
      <OrderStatusBar orderIsCompleted={orderIsCompleted} />

      <div className="p-5 flex flex-col gap-4">
        <OrderStatusHeader orderIsCompleted={orderIsCompleted} order={order} />
        <OrderSummaryInfo order={order} />
        <OrderProgressBar completed={completed} total={total} />
        <OrderInstallationsLink orderIsCompleted={orderIsCompleted} />
      </div>
    </Link>
  );
};

export default OrderCard;
