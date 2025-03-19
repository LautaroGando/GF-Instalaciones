import { create } from "zustand";
import { IInstallersSelectModalProps } from "./types";

export const useInstallersSelectModal = create<IInstallersSelectModalProps>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));