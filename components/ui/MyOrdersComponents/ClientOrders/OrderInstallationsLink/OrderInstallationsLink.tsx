import clsx from "clsx";
import React from "react";

const OrderInstallationsLink: React.FC<{ orderIsCompleted: boolean }> = ({ orderIsCompleted }) => {
  return (
    <div
      className={clsx(
        "mt-2 text-right text-sm font-medium lg:opacity-50 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-200",
        orderIsCompleted ? "text-admin-activeColor" : "text-primaryColor"
      )}
    >
      Ver instalaciones →
    </div>
  );
};

export default OrderInstallationsLink;
