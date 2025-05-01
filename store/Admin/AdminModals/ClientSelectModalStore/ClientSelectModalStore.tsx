import { create } from "zustand";
import { IClientsSelectModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";

export const useClientsSelectModal = create<IClientsSelectModalProps>((set) => ({
  isOpen: false,
  selectedClient: null,

  addClient: (client: IUser) => set({ selectedClient: client }),

  clearClient: () => set({ selectedClient: null }),

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
