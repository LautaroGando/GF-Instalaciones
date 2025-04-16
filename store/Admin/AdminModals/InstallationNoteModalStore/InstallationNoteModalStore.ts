import { create } from "zustand";
import { IInstallationNoteModalState } from "./types";

export const useInstallationNoteModalStore = create<IInstallationNoteModalState>((set) => ({
  isOpen: false,
  installation: null,
  title: null,
  text: null,
  images: [],
  openModal: ({ installation, title, text, images = [] }) =>
    set({ isOpen: true, installation, title, text, images }),
  closeModal: () =>
    set({ isOpen: false, installation: null, title: null, text: null, images: [] }),
}));
