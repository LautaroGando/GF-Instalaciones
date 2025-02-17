"use client";
import React, { useEffect, useRef } from "react";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionLink from "./SectionLink/SectionLink";
import ButtonLogout from "@/components/ui/AdminComponents/ButtonLogout/ButtonLogout";
import clsx from "clsx";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import { useSize } from "@/hooks/useSize";

export const ResponsiveMenuAdmin: React.FC = () => {
  const { menuAdmin, handleCloseMenuAdmin } = useMenuAdminStore();
  const menuAdminRef = useRef<HTMLDivElement>(null);
  const { size } = useSize();

  useEffect(() => {
    if (size >= 1024 && menuAdmin) {
      handleCloseMenuAdmin();
    }
  }, [size, menuAdmin, handleCloseMenuAdmin]);

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
        "fixed top-16 left-0 h-[calc(100dvh-64px)] bg-bgColor z-50 rounded-tr-[30px] py-3 transition-all duration-300 flex flex-col justify-between overflow-hidden",
        menuAdmin
          ? "w-[280px] px-3 shadow-lg shadow-bgColorDark/50"
          : "w-0 px-0"
      )}
    >
      <div className="flex flex-col gap-3">
        <SectionInfo />
        <SectionLink />
      </div>
      <ButtonLogout />
    </div>
  );
};

export default ResponsiveMenuAdmin;
