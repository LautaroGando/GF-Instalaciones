import { create } from "zustand";
import { InstallationsCreateModalProps } from "./types";

export const useInstallationsCreateModal = create<InstallationsCreateModalProps>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));