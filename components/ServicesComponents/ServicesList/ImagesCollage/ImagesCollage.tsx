import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import { IImageCollageData } from "@/data/ServicesComponents/ImagesCollageData/types";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export const ImagesCollage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-[repeat(5,minmax(0,1fr))] max-w-[550px] max-h-[928px] overflow-hidden gap-3">
      {imagesCollageData.map((image: IImageCollageData) => (
        <button key={image.id} className={clsx(image.span)}>
          <Image
            className="w-full h-full object-cover rounded-[8px]"
            src={image.image}
            alt="Imagen de la instalación"
            priority
          />
        </button>
      ))}
    </div>
  );
};

export default ImagesCollage;
