"use client";
import { useMenuStore } from "@/store/MenuStore/menuStore";
import clsx from "clsx";
import React, { useEffect } from "react";

export const ButtonMenu: React.FC = () => {
  const { menu, handleToggleMenu } = useMenuStore();

  useEffect(() => {
    const html = document.documentElement;
    if (menu) {
      html.classList.add("menu-open");
    } else {
      html.classList.remove("menu-open");
    }
  }, [menu]);

  return (
    <button
      data-ignore-outside-click
      onClick={handleToggleMenu}
      className="relative w-7 h-7 flex items-center justify-center z-50"
    >
      <span
        className={clsx(
          "menu-line absolute w-7 h-[2px] transition-all rounded-md",
          menu ? "rotate-45 translate-y-0" : "-translate-y-2"
        )}
      ></span>
      <span
        className={clsx(
          "menu-line absolute w-7 h-[2px] transition-all rounded-md",
          menu ? "opacity-0" : "opacity-100"
        )}
      ></span>
      <span
        className={clsx(
          "menu-line absolute w-7 h-[2px] transition-all rounded-md",
          menu ? "-rotate-45 translate-y-0" : "translate-y-2"
        )}
      ></span>
    </button>
  );
};

export default ButtonMenu;
