import clsx from "clsx";
import React from "react";

const OrderStatusBar: React.FC<{ orderIsCompleted: boolean }> = ({ orderIsCompleted }) => {
  return (
    <div
      className={clsx("h-2 w-full", orderIsCompleted ? "bg-admin-activeColor" : "bg-primaryColor")}
    />
  );
};

export default OrderStatusBar;
