import React from "react";
import { IOrderCardStatusProps } from "./types";
import clsx from "clsx";

const OrderStatusHeader: React.FC<IOrderCardStatusProps> = ({ orderIsCompleted, order }) => {
  return (
    <div className="flex justify-between items-center">
      <span
        className={clsx(
          "font-semibold",
          orderIsCompleted ? "text-admin-activeColor" : "text-primaryColor"
        )}
      >
        {orderIsCompleted ? "Completada" : "En Proceso"}
      </span>
      <span className="text-gray-500">{new Date(order.startDate).toLocaleDateString("es-AR")}</span>
    </div>
  );
};

export default OrderStatusHeader;
