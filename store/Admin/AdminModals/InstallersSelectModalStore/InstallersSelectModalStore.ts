import { create } from "zustand";
import { IInstallersSelectModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";

export const useInstallersSelectModal = create<IInstallersSelectModalProps>((set) => ({
  isOpen: false,
  selectedInstallers: [],
  addInstaller: (installer: IUser) => {
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
  
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
