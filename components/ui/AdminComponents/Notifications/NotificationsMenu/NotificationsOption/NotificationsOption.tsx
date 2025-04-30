import { useAdminNotificationStore } from "@/store/AdminNotificationStore/adminNotificationStore";
import clsx from "clsx";
import React from "react";

export const NotificationsOption: React.FC = () => {
  const { openMessages, openNotifications, handleToggle } =
    useAdminNotificationStore();

  return (
    <div className="flex min-h-[60px] w-full sticky top-0 z-30 bg-bgColor border-b dark:bg-secondaryColor">
      <button
        onClick={() => handleToggle("messages")}
        className={clsx(
          "px-3 py-2 flex-1 transition-all duration-300",
          openMessages &&
            "text-primaryColor bg-primaryColor/10 border-b border-primaryColor font-semibold"
        )}
      >
        Mensajes
      </button>
      <div className="w-[1px] h-full bg-primaryColor"></div>
      <button
        onClick={() => handleToggle("notifications")}
        className={clsx(
          "px-3 py-2 flex-1 transition-all duration-300",
          openNotifications &&
            "text-primaryColor bg-primaryColor/10 border-b border-primaryColor font-semibold"
        )}
      >
        Notificaciones
      </button>
    </div>
  );
};

export default NotificationsOption;
