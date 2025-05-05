import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useServicesStore } from "@/store/ServicesStore/useServicesStore";
import clsx from "clsx";
import { IServiceItemProps } from "./types";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import Image from "next/image";

export const ServiceItem: React.FC<IServiceItemProps> = ({
  service,
  isLast,
}) => {
  const { setIsOpenImage } = useServicesStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200, opacity: 0 }}
      animate={isInView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={clsx(
        "flex flex-col gap-3 relative pl-7 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-primaryColor before:left-0 sm:before:top-[3px]",
        isLast &&
          "after:content-[''] after:absolute after:w-[1px] after:h-[calc(100%-15px)] after:bg-primaryColor after:left-[10px] after:top-7 sm:after:top-[30px]"
      )}
    >
      <h4 className="text-primaryColor sm:text-xl">{service.title}</h4>
      <p className="text-[#4E4E4E] text-sm font-light dark:text-letterColorLight sm:text-base">
        {service.description}
      </p>
      <ul className="text-xs font-light text-[#4E4E4E] list-inside list-disc dark:text-letterColorLight sm:text-sm">
        {service.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 sm:flex-row sm:overflow-hidden xl:hidden">
        {imagesCollageData
          .filter((image) => service.imagesId.includes(image.id))
          .map((image) => (
            <Image
              key={image.id}
              onClick={() => setIsOpenImage(image.id)}
              className="min-w-full min-h-full object-cover cursor-pointer"
              src={image.image}
              alt="Imagen de la instalación"
              priority
            />
          ))}
      </div>
    </motion.div>
  );
};

export default ServiceItem;
