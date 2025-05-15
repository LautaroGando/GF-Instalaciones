import { IImageCollageData } from "./types";
import burgerKing from "@/public/assets/images/services/collage/burgerKing.jpg";
import bancoProvincia from "@/public/assets/images/services/collage/bancoProvincia.jpg";
import farmacity from "@/public/assets/images/services/collage/farmacity.jpg";
import afa from "@/public/assets/images/services/collage/afa.jpg";
import bimbo from "@/public/assets/images/services/collage/bimbo.jpg";
import medianera from "@/public/assets/images/services/collage/medianera.jpg";
import quilmesRock from "@/public/assets/images/services/collage/quilmesRock.jpg";
import aysa from "@/public/assets/images/services/collage/aysa.jpg";
import edificioLibertad from "@/public/assets/images/services/collage/edificioLibertad.jpg";

export const imagesCollageData: IImageCollageData[] = [
  { id: 0, span: "row-span-2", image: bimbo },
  { id: 1, image: farmacity },
  { id: 2, image: bancoProvincia },
  { id: 3, image: medianera },
  { id: 4, span: "row-span-2", image: afa },
  { id: 5, image: edificioLibertad },
  { id: 6, span: "col-span-2", image: burgerKing },
  { id: 7, image: aysa },
  { id: 8, image: quilmesRock },
];
