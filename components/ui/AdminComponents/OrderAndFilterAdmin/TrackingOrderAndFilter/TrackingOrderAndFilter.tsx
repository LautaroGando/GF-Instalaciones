"use client";

import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import {
  orderTableFilterOptions,
  orderTableOrderOptions,
} from "@/utils/orderTableOptions";
import TFiltersSelectOption from "@/data/AdminComponents/installationsFiltersAndOrders/installationFiltersOptions/types";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";
import { motion } from "framer-motion";
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
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const TrackingOrderAndFilter = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedFilter, setSelectedFilter] =
    useState<SingleValue<TFiltersSelectOption>>(null);
  const [selectedOrder, setSelectedOrder] =
    useState<SingleValue<TFiltersSelectOption>>(null);
  const { handleFetchOrders } = useTrackingStore();
  const { isDark } = useThemeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeOrderAndFilter = (
    filter: SingleValue<TFiltersSelectOption>,
    order: SingleValue<TFiltersSelectOption>
  ) => {
    const params: Partial<TOrdersQueryParams> = {};

    if (filter?.value === "completed") {
      params.completed = true;
    } else if (!filter) {
      params.completed = false;
    }

    if (order?.value) {
      const [key, direction] = order.value.split("-");
      if (key && direction) {
        params[key as keyof TOrdersQueryParams] = direction as "ASC" | "DESC";
      }
    }

    handleFetchOrders(params);
  };

  return (
    <motion.div
      className="flex justify-between gap-2 sm:gap-5 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full sm:w-[200px] lg:flex-row lg:gap-3 lg:items-center"
      >
        {mounted && (
          <div className="w-full">
            <Select
              options={orderTableFilterOptions}
              placeholder="Filtro"
              isClearable
              value={selectedFilter}
              onChange={(option) => {
                setSelectedFilter(option);
                handleChangeOrderAndFilter(option, selectedOrder);
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
        )}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full sm:w-[200px] lg:flex-row lg:gap-3 lg:items-center"
      >
        {mounted && (
          <div className="w-full">
            <Select
              options={orderTableOrderOptions}
              placeholder="Orden"
              isClearable
              value={selectedOrder}
              onChange={(option) => {
                setSelectedOrder(option);
                handleChangeOrderAndFilter(selectedFilter, option);
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
        )}
      </motion.div>
    </motion.div>
  );
};

export default TrackingOrderAndFilter;
