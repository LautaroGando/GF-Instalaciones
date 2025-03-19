import { create } from "zustand";
import { InstallationsEditModalProps } from "./types";

export const useInstallationsEditModal = create<InstallationsEditModalProps>((set) => ({
  isOpen: false,
  selectedInstallation: null,
  openModal: (installation) => set({ isOpen: true, selectedInstallation: installation }),
  closeModal: () => set({ isOpen: false }),
}));
