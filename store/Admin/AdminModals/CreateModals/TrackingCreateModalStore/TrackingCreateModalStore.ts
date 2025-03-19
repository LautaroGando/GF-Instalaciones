import { create } from "zustand";
import ITrackingCreateModalProps from "./types";


export const useTrackingCreateModal = create<ITrackingCreateModalProps>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
