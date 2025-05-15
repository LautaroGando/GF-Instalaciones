import IOrder from "@/interfaces/IOrder";
import React from "react";
import { motion } from "framer-motion";
import OrderCard from "../OrderCard/OrderCard";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";

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
  const { ordersPage } = useTrackingStore();
  return (
    <motion.section
      key={ordersPage}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-7 py-4 sm:py-12 sm:min-h-[45vh] md:grid md:grid-cols-2 xl:grid-cols-3"
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
