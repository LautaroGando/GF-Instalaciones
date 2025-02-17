import { create } from "zustand";
import { IMenuAdminStoreProps } from "./types";

export const useMenuAdminStore = create<IMenuAdminStoreProps>((set) => ({
  menuAdmin: false,
  handleToggleMenuAdmin: () =>
    set((state) => ({ menuAdmin: !state.menuAdmin })),
  handleCloseMenuAdmin: () => set({ menuAdmin: false }),
}));
