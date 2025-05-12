import { create } from "zustand";
import { IRecoveryPasswordStoreProps } from "./types";

export const useRecoveryPasswordStore = create<IRecoveryPasswordStoreProps>(
  (set) => ({
    modal: false,
    handleOpenModal: () => set(() => ({ modal: true })),
    handleCloseModal: () => set(() => ({ modal: false })),
  })
);
