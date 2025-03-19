import { create } from "zustand";
import { ITrackingEditModalProps } from "./types";

export const useTrackingEditModal = create<ITrackingEditModalProps>((set) => ({
  isOpen: false,
  selectedOrder: null,
  openModal: (order) => set({ isOpen: true, selectedOrder: order }),
  closeModal: () => set({ isOpen: false, selectedOrder: null }),
}));