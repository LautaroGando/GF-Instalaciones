"use client";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonLogout: React.FC = () => {
  const { handleLogout } = useUserStore();
  const { isDark } = useThemeStore();

  return (
    <button
      onClick={() => {
        handleLogout(isDark ? "#000000" : "#FAFAFA");
      }}
      className="text-letterColorLight flex justify-center items-center gap-3 border-l-2 pl-3 border-bgColor transition-all duration-300 hover:text-error hover:border-error"
    >
      Salir
      <FontAwesomeIcon icon={faRightToBracket} />
    </button>
  );
};

export default ButtonLogout;
