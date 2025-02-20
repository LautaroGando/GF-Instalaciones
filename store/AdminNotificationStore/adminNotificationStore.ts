import { create } from "zustand";
import { IAdminNotificationStoreProps } from "./types";
import type { TAdminSection } from "@/types/TAdmin";

export const useAdminNotificationStore = create<IAdminNotificationStoreProps>(
  (set) => ({
    openNotifications: false,
    openMessages: false,
    handleToggle: (section: TAdminSection) =>
      set((state) =>
        section === "notifications"
          ? { openNotifications: !state.openNotifications, openMessages: false }
          : { openMessages: !state.openMessages, openNotifications: false }
      ),
    handleClose: () =>
      set(() => ({ openNotifications: false, openMessages: false })),
  })
);
