import { create } from "zustand";
import { IClientsSelectModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";

export const useClientsSelectModal = create<IClientsSelectModalProps>((set, get) => ({
  isOpen: false,
  selectedClients: [],

  addClient: (client: IUser) => {
    const current = get().selectedClients;
    const alreadyAdded = current.some((c) => c.id === client.id);
    if (!alreadyAdded) {
      set({ selectedClients: [...current, client] });
    }
  },

  removeClient: (clientId: string) => {
    const updated = get().selectedClients.filter((c) => c.id !== clientId);
    set({ selectedClients: updated });
  },

  clearClients: () => set({ selectedClients: [] }),

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
