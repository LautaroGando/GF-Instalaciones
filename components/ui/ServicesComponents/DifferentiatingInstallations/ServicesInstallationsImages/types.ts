import { StaticImageData } from "next/image";

export interface IServicesInstallationsImagesProps {
  showAll: boolean;
  setShowAll: (value: boolean) => void;

  setSelectedImage: (value: string) => void;
  images: StaticImageData[];
}
