import IOrder from "@/interfaces/IOrder";
import React from "react";
import { motion } from "framer-motion";
import OrderCard from "../OrderCard/OrderCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OrderCardContainer: React.FC<{ orders: IOrder[] }> = ({ orders }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-7 md:grid md:grid-cols-2 xl:grid-cols-3"
    >
      {orders.map((order, i) => (
        <motion.div key={i} variants={cardVariants}>
          <OrderCard order={order} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default OrderCardContainer;
