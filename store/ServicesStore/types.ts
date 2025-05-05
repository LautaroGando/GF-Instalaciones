export interface IServicesStoreProps {
  isOpenImage: number | null;
  setIsOpenImage: (id: number) => void;
  closeImage: () => void;
  nextImage: (id: number) => void;
  prevImage: (id: number) => void;
}
