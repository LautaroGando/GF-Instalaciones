import { create } from "zustand";
import { IMenuStoreProps } from "./types";

export const useMenuStore = create<IMenuStoreProps>((set) => ({
  menu: false,
  handleToggleMenu: () => set((state) => ({ menu: !state.menu })),
  handleCloseMenu: () => set({ menu: false }),
}));
