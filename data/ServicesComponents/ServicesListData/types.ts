import { StaticImageData } from "next/image";

export interface IServicesListData {
  title: string;
  description: string;
  items: string[];
  images: StaticImageData[];
}
