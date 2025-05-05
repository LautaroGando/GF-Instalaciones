"use client";
import Subtitle from "@/components/ui/ServicesComponents/Subtitle/Subtitle";
import { servicesListData } from "@/data/ServicesComponents/ServicesListData/services-list-data";
import { IServicesListData } from "@/data/ServicesComponents/ServicesListData/types";
import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import ImagesCollage from "./ImagesCollage/ImagesCollage";
import ImageOpen from "./ImagesCollage/ImageOpen/ImageOpen";
import { useServicesStore } from "@/store/ServicesStore/useServicesStore";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import { motion, useInView } from "motion/react";

export const ServicesList: React.FC = () => {
  const { setIsOpenImage } = useServicesStore();

  return (
    <div className="flex flex-col gap-5">
      <Subtitle label="Especialización en cada tipo de instalación" />
      <p className="text-sm text-[#4E4E4E] font-light text-center dark:text-letterColorLight sm:text-lg">
        En GF Instalaciones llevamos más de 28 años ejecutando instalaciones de
        gráfica de gran formato en toda Argentina. Nuestro equipo de más de 120
        instaladores especializados nos permite llevar tu proyecto a cualquier
        rincón del país, respetando plazos y garantizando calidad.
      </p>
      <h3 className="text-primaryColor text-xl font-semibold sm:text-2xl">
        Servicios
      </h3>
      <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2">
        <div className="flex flex-col gap-5">
          {servicesListData.map((service: IServicesListData, i: number) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ y: 200, opacity: 0 }}
                animate={isInView && { y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={clsx(
                  "flex flex-col gap-3 relative pl-7 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-primaryColor before:left-0 sm:before:top-[3px]",
                  servicesListData.length - 1 !== i &&
                    "after:content-[''] after:absolute after:w-[1px] after:h-[calc(100%-15px)] after:bg-primaryColor after:left-[10px] after:top-7 sm:after:top-[30px]"
                )}
              >
                <h4 className="text-primaryColor sm:text-xl">
                  {service.title}
                </h4>
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
          })}
        </div>
        <div className="hidden xl:block">
          <ImagesCollage />
        </div>
        <ImageOpen />
      </div>
    </div>
  );
};

export default ServicesList;
