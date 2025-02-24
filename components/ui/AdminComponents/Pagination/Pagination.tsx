import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-between sm:self-end sm:gap-3">
      <button className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[7px]">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className="font-medium text-xs sm:text-sm lg:text-base">Página 1 de 10</p>
      <button className="w-9 h-9 bg-primaryColor text-letterColorLight flex justify-center items-center rounded-[7px]">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
