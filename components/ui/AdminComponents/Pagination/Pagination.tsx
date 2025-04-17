"use client";
import { useUserStore } from "@/store/UserStore/userStore";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "motion/react";

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

export const Pagination: React.FC = () => {
  const { filterUsers, page, maxPage, handlePrevPage, handleNextPage } =
    useUserStore();

  if (!filterUsers) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between sm:self-end sm:gap-3"
    >
      <button
        onClick={handlePrevPage}
        disabled={page <= 1}
        className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[2px] transition-all hover:bg-primaryColorHover disabled:bg-disabledButton disabled:hover:bg-disabledButton/80"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className="w-[150px] text-center font-medium text-xs sm:text-sm lg:text-base">
        Página {page} de {maxPage}
      </p>
      <button
        onClick={handleNextPage}
        disabled={page === maxPage}
        className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[2px] transition-all hover:bg-primaryColorHover disabled:bg-disabledButton disabled:hover:bg-disabledButton/80"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </motion.div>
  );
};

export default Pagination;
