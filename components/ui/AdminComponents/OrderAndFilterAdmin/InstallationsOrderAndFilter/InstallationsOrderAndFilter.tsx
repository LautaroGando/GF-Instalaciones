"use client";

import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { adminLabelClassName } from "@/constants/classNames";
import {
  provinceOptions,
  statusOptions,
} from "@/data/AdminComponents/installationsFiltersAndOrders/installationFiltersOptions/installationFiltersOptions";
import { orderOptions } from "@/data/AdminComponents/installationsFiltersAndOrders/installationOrdersOptions/installationOrdersOptions";
import TFiltersSelectOption from "@/data/AdminComponents/installationsFiltersAndOrders/installationFiltersOptions/types";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { motion } from "framer-motion";
import useCurrentOrderId from "@/hooks/useCurrentOrderId";
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

const InstallationsOrderAndFilter = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedStatus, setSelectedStatus] =
    useState<SingleValue<TFiltersSelectOption>>(null);
  const [selectedProvince, setSelectedProvince] =
    useState<SingleValue<TFiltersSelectOption>>(null);
  const [selectedOrder, setSelectedOrder] =
    useState<SingleValue<TFiltersSelectOption>>(null);
  const { isDark } = useThemeStore();
  const { handleFetchInstallations } = useTrackingStore();
  const orderId = useCurrentOrderId();

  const handleChangeOrderAndFilter = (
    status: SingleValue<TFiltersSelectOption>,
    province: SingleValue<TFiltersSelectOption>,
    order: SingleValue<TFiltersSelectOption>
  ) => {
    if (!orderId) throw new Error("ID de orden inexistente");

    const [key, direction] = order?.value.split("-") || [];

    const params = {
      status: status?.value || "",
      province: province?.value || "",
      createdAt: "",
      updatedAt: "",
    };

    if (key === "createdAt" || key === "updatedAt") {
      params[key] = direction;
    }

    handleFetchInstallations(orderId, params);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="flex justify-between gap-2 sm:gap-5 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center"
      >
        <label className={adminLabelClassName}>Filtrar por:</label>
        <div className="min-w-[180px]">
          <Select
            options={statusOptions}
            placeholder="Estado"
            isClearable
            value={selectedStatus}
            onChange={(option) => {
              setSelectedStatus(option);
              handleChangeOrderAndFilter(
                option,
                selectedProvince,
                selectedOrder
              );
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

        <div className="min-w-[200px]">
          <Select
            options={provinceOptions}
            placeholder="Provincia"
            isClearable
            value={selectedProvince}
            onChange={(option) => {
              setSelectedProvince(option);
              handleChangeOrderAndFilter(selectedStatus, option, selectedOrder);
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
        <label className={adminLabelClassName}>Ordenar por:</label>
        <div className="min-w-[200px]">
          <Select
            options={orderOptions}
            placeholder="Seleccionar orden"
            isClearable
            value={selectedOrder}
            onChange={(option) => {
              setSelectedOrder(option);
              handleChangeOrderAndFilter(
                selectedStatus,
                selectedProvince,
                option
              );
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

export default InstallationsOrderAndFilter;
