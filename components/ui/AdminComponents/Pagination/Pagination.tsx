"use client";
import { useUserStore } from "@/store/UserStore/userStore";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Pagination: React.FC = () => {
  const { filterUsers, page, maxPage, handlePrevPage, handleNextPage } =
    useUserStore();

  if (!filterUsers) return null;

  return (
    <div className="flex items-center justify-between sm:self-end sm:gap-3">
      <button
        onClick={handlePrevPage}
        disabled={page <= 1}
        className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[7px] transition-all disabled:bg-disabledButton"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className="w-[150px] text-center font-medium text-xs sm:text-sm lg:text-base">
        Página {page} de {maxPage}
      </p>
      <button
        onClick={handleNextPage}
        disabled={page === maxPage}
        className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[7px] transition-all disabled:bg-disabledButton"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
