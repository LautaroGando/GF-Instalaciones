import React from "react";
import { motion } from "framer-motion";
import { IOrderCardStatusProps } from "./types";
import clsx from "clsx";

const OrderStatusHeader: React.FC<IOrderCardStatusProps> = ({ orderIsCompleted, order }) => {
  console.log(order);
  
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
          orderIsCompleted ? "text-admin-activeColor" : "text-primaryColor"
        )}
      >
        {orderIsCompleted ? "Completada" : "En Proceso"}
      </span>
      <span className="text-gray-500 dark:text-white">
        {new Date(order.startDate).toLocaleDateString("es-AR")}
      </span>
    </motion.div>
  );
};

export default OrderStatusHeader;
