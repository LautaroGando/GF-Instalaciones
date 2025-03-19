"use client";
import { useUserStore } from "@/store/UserStore/userStore";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonLogout: React.FC = () => {
  const { handleLogout } = useUserStore();

  return (
    <button
      onClick={handleLogout}
      className="text-primaryColor bg-bgColor border border-bgColor w-7 h-7 flex justify-center items-center rounded-full transition-all duration-300 hover:text-letterColorLight hover:bg-primaryColor"
    >
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default ButtonLogout;
