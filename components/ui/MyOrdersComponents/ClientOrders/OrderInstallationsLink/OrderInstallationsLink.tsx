import clsx from "clsx";
import React from "react";

const OrderInstallationsLink: React.FC<{ orderIsCompleted: boolean; toReview: boolean }> = ({
  orderIsCompleted,
  toReview,
}) => {
  return (
    <div
      className={clsx(
        "mt-2 text-right text-sm font-medium lg:opacity-50 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-200",
        orderIsCompleted ? "text-admin-activeColor" : toReview ? "text-admin-editColor": "text-primaryColor"
      )}
    >
      Ver instalaciones →
    </div>
  );
};

export default OrderInstallationsLink;
