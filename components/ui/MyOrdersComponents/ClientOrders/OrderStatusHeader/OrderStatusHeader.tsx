import React from "react";
import { motion } from "framer-motion";
import { IOrderCardStatusProps } from "./types";
import clsx from "clsx";

const OrderStatusHeader: React.FC<IOrderCardStatusProps> = ({
  toReview,
  orderIsCompleted,
  order,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.3,
          },
        },
      }}
      className="flex justify-between items-center"
    >
      <span
        className={clsx(
          "font-semibold",
          orderIsCompleted
            ? "text-admin-activeColor"
            : toReview
            ? "text-admin-editColor"
            : "text-primaryColor"
        )}
      >
        {orderIsCompleted ? "Completada" : toReview ? "A Revisar" : "En Proceso"}
      </span>
      <span className="text-gray-500 dark:text-white">
        {new Date(order.createdAt).toLocaleDateString("es-AR")}
      </span>
    </motion.div>
  );
};

export default OrderStatusHeader;
