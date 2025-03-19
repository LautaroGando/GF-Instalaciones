import { create } from "zustand";
import { IProfileStoreProps } from "./types";

export const useProfileStore = create<IProfileStoreProps>((set) => ({
  open: false,
  handleToggle: () => set((state) => ({ open: !state.open })),
  handleClose: () => set(() => ({ open: false })),
}));
