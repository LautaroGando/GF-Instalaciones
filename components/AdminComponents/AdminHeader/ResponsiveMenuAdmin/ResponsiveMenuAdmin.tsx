"use client";
import React, { useEffect, useRef } from "react";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionLink from "./SectionLink/SectionLink";
import ButtonLogout from "@/components/ui/GeneralComponents/ButtonLogout/ButtonLogout";
import clsx from "clsx";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";

export const ResponsiveMenuAdmin: React.FC = () => {
  const { menuAdmin, handleCloseMenuAdmin } = useMenuAdminStore();
  const menuAdminRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-ignore-outside-click]")) {
        return;
      }

      if (menuAdminRef.current && !menuAdminRef.current.contains(target)) {
        handleCloseMenuAdmin();
      }
    };

    if (menuAdmin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAdmin, handleCloseMenuAdmin]);

  return (
    <div
      ref={menuAdminRef}
      className={clsx(
        "fixed top-16 left-0 h-[calc(100dvh-64px)] overflow-y-scroll shadow-lg shadow-bgColorDark/50 hiddenScrollbar bg-bgColor z-50 rounded-tr-[30px] py-3 transition-all duration-300 flex flex-col justify-between overflow-hidden gap-5 lg:overflow-hidden",
        menuAdmin ? "w-[280px] px-3" : "w-0 px-0 lg:w-[130px]"
      )}
    >
      <div className="absolute right-4 lg:hidden">
        <SelectTheme adminResponsive />
      </div>
      <div className="flex flex-col gap-3">
        <SectionInfo />
        <SectionLink />
      </div>
      <div className="text-center lg:hidden">
        <ButtonLogout />
      </div>
    </div>
  );
};

export default ResponsiveMenuAdmin;
