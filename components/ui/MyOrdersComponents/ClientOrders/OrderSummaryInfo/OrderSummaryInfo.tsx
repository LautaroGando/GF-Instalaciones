import React from "react";
import { motion } from "framer-motion";
import { IOrderSummaryInfoProps } from "./types";

const OrderSummaryInfo: React.FC<IOrderSummaryInfoProps> = ({ order }) => {
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
      className="text-sm text-gray-500 group-hover:text-secondaryColor/70 transition-colors duration-200 space-y-2"
    >
      <p className="font-semibold text-base truncate dark:text-white">
        {order.title}
      </p>

      <p className="text-xs dark:text-white" />

      <p className="text-xs dark:text-white/70">
        Número de Órden: <span className="font-mono">{order.orderNumber}</span>
      </p>

      <p className="text-[14px] line-clamp-2 text-gray-700 dark:text-white">
        {order.description}
      </p>
    </motion.div>
  );
};

export default OrderSummaryInfo;
