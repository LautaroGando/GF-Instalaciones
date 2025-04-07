import { adminLabelClassName, adminSelectClassName } from "@/constants/classNames";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { orderTableFilterOptions, orderTableOrderOptions } from "@/utils/orderTableOptions";
import { motion } from "framer-motion";
import React from "react";

const TrackingOrderAndFilter = () => {
  const { handleFetchOrders } = useTrackingStore();

  // FUNCIONES PARA ORDENAR Y FILTRAR
  const handleOnChangeOrderSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const [key, value] = selectedValue.split("-") as [string, "ASC" | "DESC"];
    handleFetchOrders({ [key]: value });
  };

  const handleOnChangeFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;

    if (selected === "completed") {
      handleFetchOrders({ completed: true });
    } else {
      handleFetchOrders({ completed: false });
    }
  };

  // VARIABLES PARA ANIMACIONES
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-between sm:gap-5 flex-wrap"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row lg:gap-3 lg:items-center"
      >
        <motion.label variants={itemVariants} className={adminLabelClassName}>
          Filtrar por:
        </motion.label>
        <motion.select
          variants={itemVariants}
          onChange={handleOnChangeFilterSelect}
          className={adminSelectClassName}
        >
          {orderTableFilterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </motion.select>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row lg:gap-3 lg:items-center"
      >
        <motion.label variants={itemVariants} className={adminLabelClassName}>
          Ordenar por:
        </motion.label>
        <motion.select
          variants={itemVariants}
          onChange={handleOnChangeOrderSelect}
          className={`${adminSelectClassName} max-w-[130px] truncate`}
          title="Ordenar por"
        >
          {orderTableOrderOptions.map((opt) => (
            <option key={`${opt.key}-${opt.value}`} value={`${opt.key}-${opt.value}`}>
              {opt.label}
            </option>
          ))}
        </motion.select>
      </motion.div>
    </motion.div>
  );
};

export default TrackingOrderAndFilter;
