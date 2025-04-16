import { create } from "zustand";
import { IMenuInstallerStoreProps } from "./types";

export const useMenuInstallerStore = create<IMenuInstallerStoreProps>(
  (set) => ({
    menu: false,
    handleToggleMenu: () => set((state) => ({ menu: !state.menu })),
    handleCloseMenu: () => set(() => ({ menu: false })),
  })
);
