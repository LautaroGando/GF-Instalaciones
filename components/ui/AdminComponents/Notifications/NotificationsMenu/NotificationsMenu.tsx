"use client";
import { useAdminNotificationStore } from "@/store/AdminNotificationStore/adminNotificationStore";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import NotificationsOption from "./NotificationsOption/NotificationsOption";
import NotificationsSection from "./NotificationsSection/NotificationsSection";

export const NotificationMenu: React.FC = () => {
  const { openNotifications, handleClose } =
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

    if (openNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNotifications, handleClose]);

  return (
    <div
      data-ignore-notifications-outside-click
      ref={menuNotificationsRef}
      className={clsx(
        "fixed top-0 mt-0 w-full right-0 lg:mt-5 z-50 bg-bgColor rounded-md shadow-lg shadow-bgColorDark/20 transition-all duration-300 flex flex-col justify-between overflow-y-auto hiddenScrollbar items-center dark:shadow-bgColor/20 dark:bg-secondaryColor lg:top-full lg:absolute lg:w-[400px]",
        openNotifications ? "h-[100dvh] lg:h-[70dvh]" : "h-0"
      )}
    >
      <div className="flex flex-col w-full">
        <NotificationsOption />
        <div className="w-full h-full bg-bgColor dark:bg-secondaryColor">
          {openNotifications ? <NotificationsSection /> : null}
        </div>
      </div>
      <button
        onClick={handleClose}
        type="button"
        className="transition-all w-full min-h-[40px] text-redColor border-t border-redColor sticky bottom-0 bg-bgColor dark:bg-secondaryColor hover:bg-redColor hover:text-letterColorLight dark:hover:bg-redColor"
      >
        Cerrar
      </button>
    </div>
  );
};

export default NotificationMenu;
