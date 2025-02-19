"use client";
import React, { useEffect, useRef } from "react";
import ButtonProfile from "../../ButtonProfile/ButtonProfile";
import { useAdminProfileStore } from "@/store/AdminProfileStore/adminProfileStore";
import clsx from "clsx";
import ButtonLogout from "../../ButtonLogout/ButtonLogout";

export const AdminMenu: React.FC = () => {
  const { open, handleClose } = useAdminProfileStore();
  const menuAdminProfileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-ignore-outside-click]")) {
        return;
      }

      if (
        menuAdminProfileRef.current &&
        !menuAdminProfileRef.current.contains(target)
      ) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  return (
    <div
      ref={menuAdminProfileRef}
      className={clsx(
        "hidden absolute w-full bg-bgColor top-full mt-5 transition-all duration-300 left-0 overflow-hidden border border-bgColor flex-col lg:flex",
        open ? "h-[98px]" : "h-0 p-0 border-none"
      )}
    >
      <ButtonProfile classes="lg:w-full lg:h-full lg:text-center lg:transition-all lg:p-3 lg:hover:bg-primaryColor lg:hover:text-letterColorLight lg:hover:border-none" />
      <ButtonLogout classes="lg:w-full lg:h-full lg:text-center lg:transition-all lg:p-3 lg:hover:bg-redColor lg:hover:text-letterColorLight lg:hover:border-none" />
    </div>
  );
};

export default AdminMenu;
