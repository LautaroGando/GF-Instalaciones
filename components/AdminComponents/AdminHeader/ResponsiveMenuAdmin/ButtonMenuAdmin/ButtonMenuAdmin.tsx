"use client";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import React from "react";

export const ButtonMenuAdmin: React.FC = () => {
  const { handleToggleMenuAdmin } = useMenuAdminStore();

  return (
    <button
      data-ignore-outside-click
      onClick={handleToggleMenuAdmin}
      className="relative w-7 h-7 flex items-center justify-center z-50"
    >
      <span className="absolute w-5 h-[2px] bg-bgColor transition-all rounded-md translate-y-[5px]"></span>
      <span className="absolute w-5 h-[2px] bg-bgColor transition-all rounded-md"></span>
      <span className="absolute w-5 h-[2px] bg-bgColor transition-all rounded-md -translate-y-[5px]"></span>
    </button>
  );
};

export default ButtonMenuAdmin;
