"use client";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import { IImageCollageData } from "@/data/ServicesComponents/ImagesCollageData/types";
import useDisableScroll from "@/hooks/useDisableScroll";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import ImageOpen from "./ImageOpen/ImageOpen";
import { useServicesStore } from "@/store/ServicesStore/useServicesStore";

export const ImagesCollage: React.FC = () => {
  const { isOpenImage, setIsOpenImage } = useServicesStore();
  useDisableScroll(isOpenImage !== null);

  return (
    <div className="grid grid-cols-2 grid-rows-[repeat(5,minmax(0,1fr))] max-w-[550px] max-h-[928px] overflow-hidden gap-3">
      {imagesCollageData.map((image: IImageCollageData) => (
        <div
          key={image.id}
          onClick={() => setIsOpenImage(image.id)}
          className={clsx("cursor-pointer", image.span)}
        >
          <Image
            className="w-full h-full object-cover rounded-[8px]"
            src={image.image}
            alt="Imagen de la instalación"
            priority
          />
        </div>
      ))}
      <ImageOpen />
    </div>
  );
};

export default ImagesCollage;
