"use client";
import { useAdminNotificationStore } from "@/store/AdminNotificationStore/adminNotificationStore";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import NotificationsOption from "./NotificationsOption/NotificationsOption";

export const NotificationMenu: React.FC = () => {
  const { openNotifications, openMessages, handleClose } =
    useAdminNotificationStore();
  const menuNotificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-ignore-notifications-outside-click]")) {
        return;
      }

      if (
        menuNotificationsRef.current &&
        !menuNotificationsRef.current.contains(target)
      ) {
        handleClose();
      }
    };

    if (openNotifications || openMessages) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNotifications, openMessages, handleClose]);

  return (
    <div
      data-ignore-notifications-outside-click
      ref={menuNotificationsRef}
      className={clsx(
        "absolute w-full top-full left-0 mt-5 z-50 bg-bgColor shadow-lg shadow-bgColorDark/20 transition-all duration-300 flex flex-col justify-between overflow-y-scroll hiddenScrollbar items-center",
        openNotifications || openMessages ? "h-[400px]" : "h-0"
      )}
    >
      <NotificationsOption />
      <div className="w-full h-full overflow-y-scroll bg-bgColor"></div>
      <button
        onClick={handleClose}
        type="button"
        className="transition-all w-full h-[40px] text-redColor border-t border-redColor hover:bg-redColor hover:text-letterColorLight"
      >
        Cerrar
      </button>
    </div>
  );
};

export default NotificationMenu;
