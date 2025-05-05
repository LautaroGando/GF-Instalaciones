import { create } from "zustand";
import { IServicesStoreProps } from "./types";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";

export const useServicesStore = create<IServicesStoreProps>((set, get) => ({
  isOpenImage: null,
  setIsOpenImage: (id: number) => set(() => ({ isOpenImage: id })),
  closeImage: () => set(() => ({ isOpenImage: null })),
  nextImage: (currentId: number) => {
    const currentIndex = imagesCollageData.findIndex(
      (img) => img.id === currentId
    );
    const nextIndex = (currentIndex + 1) % imagesCollageData.length;
    set({ isOpenImage: imagesCollageData[nextIndex].id });
  },

  prevImage: (currentId: number) => {
    const currentIndex = imagesCollageData.findIndex(
      (img) => img.id === currentId
    );
    const prevIndex =
      (currentIndex - 1 + imagesCollageData.length) % imagesCollageData.length;
    set({ isOpenImage: imagesCollageData[prevIndex].id });
  },
}));
