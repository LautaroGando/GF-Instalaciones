"use client";
import { useAdminNotificationStore } from "@/store/AdminNotificationStore/adminNotificationStore";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

export const NotificationMenu: React.FC = () => {
  const { open, handleClose } = useAdminNotificationStore();

  return (
    <div
      className={clsx(
        "fixed w-full h-full top-0 left-0 z-50 bg-secondaryColor/80 transition-all duration-300 flex justify-center items-center",
        open ? "visible opacity-100" : "opacity-0 invisible"
      )}
    >
      <div className="w-[300px] h-[500px] bg-bgColor rounded-sm relative">
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-2 right-3 transition-all hover:text-primaryColor"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
};

export default NotificationMenu;
