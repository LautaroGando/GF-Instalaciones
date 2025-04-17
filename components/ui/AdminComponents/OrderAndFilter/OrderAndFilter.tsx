"use client";

import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { IFilter, IOrder } from "@/data/OrderAndFilter/types";
import { IOrderAndFilterProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const OrderAndFilter: React.FC<IOrderAndFilterProps> = ({
  filter,
  order,
}) => {
  const { handleFilterUsers, handleOrderUsers } = useUserStore();

  const [selectedFilter, setSelectedFilter] =
    useState<SingleValue<IFilter>>(null);
  const [selectedOrder, setSelectedOrder] = useState<SingleValue<IOrder>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-between flex-wrap gap-2 sm:gap-5 z-50"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center"
      >
        <div className="min-w-[180px]">
          <Select
            options={filter}
            placeholder="Filtro"
            isClearable
            instanceId="filter-select"
            value={selectedFilter}
            onChange={(option) => {
              setSelectedFilter(option);
              handleFilterUsers(option?.value || "");
            }}
            classNames={{
              control: () =>
                "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
              option: ({ isFocused }) =>
                isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
              menu: () => "bg-white shadow-md rounded-md mt-1",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center"
      >
        <div className="min-w-[200px]">
          <Select
            options={order}
            placeholder="Orden"
            isClearable
            instanceId="order-select"
            value={selectedOrder}
            onChange={(option) => {
              setSelectedOrder(option);
              handleOrderUsers(option?.value || "");
            }}
            classNames={{
              control: () =>
                "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
              option: ({ isFocused }) =>
                isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
              menu: () => "bg-white shadow-md rounded-md mt-1",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderAndFilter;
