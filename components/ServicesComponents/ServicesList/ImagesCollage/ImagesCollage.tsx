"use client";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import { IImageCollageData } from "@/data/ServicesComponents/ImagesCollageData/types";
import useDisableScroll from "@/hooks/useDisableScroll";
import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import ImageOpen from "./ImageOpen/ImageOpen";
import { useServicesStore } from "@/store/ServicesStore/useServicesStore";
import { motion, useInView } from "motion/react";

export const ImagesCollage: React.FC = () => {
  const { isOpenImage, setIsOpenImage } = useServicesStore();
  useDisableScroll(isOpenImage !== null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 grid-rows-[repeat(5,minmax(0,1fr))] max-w-[550px] max-h-[928px] overflow-hidden gap-3"
    >
      {imagesCollageData.map((image: IImageCollageData, i: number) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView && { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.2, ease: "backInOut" }}
          onClick={() => setIsOpenImage(image.id)}
          className={clsx("cursor-pointer", image.span)}
        >
          <Image
            className="w-full h-full object-cover rounded-[8px]"
            src={image.image}
            alt="Imagen de la instalación"
            priority
          />
        </motion.div>
      ))}
      <ImageOpen />
    </div>
  );
};

export default ImagesCollage;
