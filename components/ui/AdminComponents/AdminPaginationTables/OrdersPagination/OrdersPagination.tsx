"use client";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const OrdersPagination = () => {
  const { ordersPage, ordersTotalPages, ordersPreviousPage, ordersNextPage } = useTrackingStore();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between sm:self-end sm:gap-3"
    >
      <button
        onClick={ordersPreviousPage}
        disabled={ordersPage === 1}
        className="w-9 h-9 border border-primaryColor bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[2px] transition-all hover:bg-letterColorLight hover:text-primaryColor disabled:bg-disabledButton disabled:border-none disabled:hover:text-letterColorLight disabled:hover:bg-disabledButton/60"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className="w-[150px] text-center font-medium text-xs sm:text-sm lg:text-base">
        Página {ordersPage} de {ordersTotalPages}
      </p>
      <button
        onClick={ordersNextPage}
        disabled={ordersPage === ordersTotalPages}
        className="w-9 h-9 border border-primaryColor bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[2px] transition-all hover:bg-letterColorLight hover:text-primaryColor disabled:bg-disabledButton disabled:border-none disabled:hover:text-letterColorLight disabled:hover:bg-disabledButton/60"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </motion.div>
  );
};

export default OrdersPagination;
