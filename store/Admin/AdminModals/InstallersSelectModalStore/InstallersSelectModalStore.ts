import { create } from "zustand";
import { IInstallersSelectModalProps } from "./types";
import { IInstaller } from "@/interfaces/IInstaller";

export const useInstallersSelectModal = create<IInstallersSelectModalProps>((set) => ({
  isOpen: false,
  selectedInstallers: [],
  addInstaller: (installer: IInstaller) => {
    set((state) => {
      if (state.selectedInstallers.some((i) => i.id === installer.id)) {
        return state;
      }
      return { selectedInstallers: [...state.selectedInstallers, installer] };
    });
  },

  deleteInstaller: (id: string) => {
    set((state) => ({
      selectedInstallers: state.selectedInstallers.filter((installer) => installer.id !== id),
    }));
  },
  
  clearInstallers: () => set({ selectedInstallers: [] }),

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
