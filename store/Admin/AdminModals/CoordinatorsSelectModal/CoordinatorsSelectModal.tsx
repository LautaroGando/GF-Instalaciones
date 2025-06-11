import { create } from "zustand";
import { ICoordinatorsSelectModalProps } from "./types";
import { ISelectedCoordinator } from "@/interfaces/ISelectedCoordinator";

export const useCoordinatorsSelectModal = create<ICoordinatorsSelectModalProps>((set) => ({
  isOpen: false,
  selectedCoordinators: [],

  addCoordinator: (coordinator: ISelectedCoordinator) => {
    set((state) => {
      if (state.selectedCoordinators.some((c) => c.id === coordinator.id)) {
        return state;
      }
      return {
        selectedCoordinators: [...state.selectedCoordinators, coordinator],
      };
    });
  },

  deleteCoordinator: (id: string) =>
    set((state) => ({
      selectedCoordinators: state.selectedCoordinators.filter(
        (coordinator) => coordinator.id !== id
      ),
    })),

  clearCoordinators: () => set({ selectedCoordinators: [] }),

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));