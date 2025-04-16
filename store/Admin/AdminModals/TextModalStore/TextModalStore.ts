import { create } from "zustand";
import { ITextModalStateProps } from "./types";

export const useTextModalStore = create<ITextModalStateProps>((set) => ({
  isOpen: false,
  title: "",
  text: null,
  openModal: (title, text) => set({ isOpen: true, title, text }),
  closeModal: () => set({ isOpen: false, title: "", text: null }),
}));
