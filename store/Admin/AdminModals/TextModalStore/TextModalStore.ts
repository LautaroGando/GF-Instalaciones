import { create } from "zustand";
import { ITextModalStateProps } from "./types";

export const useTextModalStore = create<ITextModalStateProps>((set) => ({
  isOpen: false,
  title: "",
  text: null,
  images: [],
  openModal: (title, text, images = []) =>
    set({ isOpen: true, title, text, images }),
  closeModal: () =>
    set({ isOpen: false, title: "", text: null, images: [] }),
}));
