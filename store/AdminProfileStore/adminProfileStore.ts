import { create } from "zustand";
import { IAdminProfileStoreProps } from "./types";

export const useAdminProfileStore = create<IAdminProfileStoreProps>((set) => ({
  open: false,
  handleToggle: () => set((state) => ({ open: !state.open })),
  handleClose: () => set(() => ({ open: false })),
}));
