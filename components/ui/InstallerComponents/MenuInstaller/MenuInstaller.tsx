"use client";
import { useMenuInstallerStore } from "@/store/MenuInstallerStore/menuinstallerStore";
import clsx from "clsx";
import React from "react";

export const MenuInstaller: React.FC = () => {
  const { menu, handleToggleMenu } = useMenuInstallerStore();

  return (
    <button
      onClick={handleToggleMenu}
      className="w-7 h-7 flex items-center justify-center z-50 md:hidden"
    >
      <span
        className={clsx(
          "absolute w-7 h-[2px] transition-all rounded-md dark:bg-bgColor",
          menu
            ? "rotate-45 translate-y-0 bg-secondaryColor"
            : "-translate-y-2 bg-secondaryColor"
        )}
      ></span>
      <span
        className={clsx(
          "absolute w-7 h-[2px] transition-all rounded-md dark:bg-bgColor",
          menu ? "opacity-0 bg-bgColor" : "opacity-100 bg-secondaryColor"
        )}
      ></span>
      <span
        className={clsx(
          "absolute w-7 h-[2px] transition-all rounded-md dark:bg-bgColor",
          menu
            ? "-rotate-45 translate-y-0 bg-secondaryColor"
            : "translate-y-2 bg-secondaryColor"
        )}
      ></span>
    </button>
  );
};

export default MenuInstaller;
