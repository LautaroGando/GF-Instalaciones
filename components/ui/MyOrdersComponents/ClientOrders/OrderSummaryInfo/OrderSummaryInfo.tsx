import React from "react";
import { IOrderSummaryInfoProps } from "./types";

const OrderSummaryInfo: React.FC<IOrderSummaryInfoProps> = ({ order }) => {
  return (
    <div className="text-sm text-gray-600 group-hover:text-secondaryColor transition-colors duration-200 space-y-2">
      <p className="font-semibold text-base text-gray-500 truncate">{order.title}</p>
      <p className="text-xs text-gray-500" />
      <p className="text-xs text-gray-500">
        Número de Órden: <span className="font-mono">{order.orderNumber}</span>
      </p>
      <p className="text-sm line-clamp-2 text-gray-700">{order.description}</p>
    </div>
  );
};

export default OrderSummaryInfo;
