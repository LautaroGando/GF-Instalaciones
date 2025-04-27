"use client";

import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { IFilter, IOrder } from "@/data/OrderAndFilter/types";
import { IOrderAndFilterProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";
import { motion } from "motion/react";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

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
  const { isDark } = useThemeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-between flex-wrap gap-2 z-30 sm:gap-5"
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
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                padding: 4,
                backgroundColor: isDark ? "#000000" : "#FAFAFA",
                borderColor: isFocused ? "#A79351" : baseStyles.borderColor,
                boxShadow: isFocused
                  ? "0 0 0 1px #A79351"
                  : baseStyles.boxShadow,
                "&:hover": {
                  borderColor: isFocused ? "#A79351" : baseStyles.borderColor,
                },
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: isDark ? "#000000" : "#FAFAFA",
                boxShadow: isDark ? "0 1px 3px #FAFAFA" : "0 0 3px #000000",
              }),
              option: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                backgroundColor: isFocused ? "#A7935144" : "",
              }),
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
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                padding: 4,
                backgroundColor: isDark ? "#000000" : "#FAFAFA",
                borderColor: isFocused ? "#A79351" : baseStyles.borderColor,
                boxShadow: isFocused
                  ? "0 0 0 1px #A79351"
                  : baseStyles.boxShadow,
                "&:hover": {
                  borderColor: isFocused ? "#A79351" : baseStyles.borderColor,
                },
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: isDark ? "#000000" : "#FAFAFA",
                boxShadow: isDark ? "0 1px 3px #FAFAFA" : "0 0 3px #000000",
              }),
              option: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                backgroundColor: isFocused ? "#A7935144" : "",
              }),
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderAndFilter;
