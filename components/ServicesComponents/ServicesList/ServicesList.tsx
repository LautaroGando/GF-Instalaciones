"use client";
import Subtitle from "@/components/ui/ServicesComponents/Subtitle/Subtitle";
import { servicesListData } from "@/data/ServicesComponents/ServicesListData/services-list-data";
import { IServicesListData } from "@/data/ServicesComponents/ServicesListData/types";
import React from "react";
import ImagesCollage from "./ImagesCollage/ImagesCollage";
import ImageOpen from "./ImagesCollage/ImageOpen/ImageOpen";
import ServiceItem from "./ServiceItem/ServiceItem";

export const ServicesList: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Subtitle label="Especialización en cada tipo de Instalación" />
      <p className="text-sm text-[#4E4E4E] font-light text-center dark:text-letterColorLight sm:text-lg">
        En GF Instalaciones llevamos más de 29 años ejecutando Instalaciones de
        Gráfica de Gran Formato en toda Argentina. Nuestro equipo de más de 120
        Instaladores especializados nos permite llevar tu proyecto a cualquier
        rincón del País, respetando plazos y garantizando calidad.
      </p>
      <h3 className="text-primaryColor text-xl font-semibold sm:text-2xl">
        Servicios
      </h3>
      <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2">
        <div className="flex flex-col gap-5">
          {servicesListData.map((service: IServicesListData, i: number) => (
            <ServiceItem
              key={i}
              service={service}
              isLast={servicesListData.length - 1 !== i}
            />
          ))}
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
