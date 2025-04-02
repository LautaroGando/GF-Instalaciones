import { create } from "zustand";
import { ICoordinatorsSelectModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";

export const useCoordinatorsSelectModal = create<ICoordinatorsSelectModalProps>((set) => ({
  isOpen: false,
  selectedCoordinators: [],
  addCoordinator: (coordinator: IUser) => {
    set((state) => {
      if (state.selectedCoordinators.some((i) => i.id === coordinator.id)) {
        return state;
      }
      return { selectedCoordinators: [coordinator] };
    });
  },

  deleteCoordinator: (id: string) => {
    set((state) => ({
      selectedCoordinators: state.selectedCoordinators.filter(
        (coordinator) => coordinator.id !== id
      ),
    }));
  },

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
