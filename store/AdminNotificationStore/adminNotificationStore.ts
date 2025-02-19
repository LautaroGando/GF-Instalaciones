import { create } from "zustand";
import { IAdminNotificationStoreProps } from "./types";

export const useAdminNotificationStore = create<IAdminNotificationStoreProps>(
  (set) => ({
    open: false,
    handleToggle: () => set((state) => ({ open: !state.open })),
    handleClose: () => set(() => ({ open: false })),
  })
);
