import { StaticImageData } from "next/image";

export interface IImageCollageData {
  id: number;
  image: StaticImageData;
  span?: string;
}
