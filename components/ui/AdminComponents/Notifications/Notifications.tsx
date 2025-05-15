"use client";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NotificationMenu from "./NotificationsMenu/NotificationsMenu";
import { useAdminNotificationStore } from "@/store/AdminNotificationStore/adminNotificationStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { IUser } from "@/interfaces/IUser";

export const Notifications: React.FC = () => {
  const { handleToggle } = useAdminNotificationStore();
  const { users } = useUserStore();

  return (
    <div className="gap-5 justify-center flex">
      <NotificationMenu />
      <button
        onClick={() => handleToggle("notifications")}
        type="button"
        className="text-primaryColor relative border border-primaryColor p-2 w-[35px] h-[35px] rounded-sm flex justify-center items-center text-xl lg:bg-bgColor"
      >
        <FontAwesomeIcon icon={faBell} />
        <div className="absolute -top-1 -right-1 w-[15px] h-[15px] rounded-full bg-primaryColor text-letterColorLight flex justify-center items-center">
          <span className="text-xs">
            {users
              ? users?.filter(
                  (user: IUser) => user.installer?.status === "EN PROCESO"
                ).length
              : 0}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Notifications;
