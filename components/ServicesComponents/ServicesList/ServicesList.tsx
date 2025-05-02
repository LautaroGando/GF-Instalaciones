import Subtitle from "@/components/ui/ServicesComponents/Subtitle/Subtitle";
import { servicesListData } from "@/data/ServicesComponents/ServicesListData/services-list-data";
import { IServicesListData } from "@/data/ServicesComponents/ServicesListData/types";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ImagesCollage from "./ImagesCollage/ImagesCollage";

export const ServicesList: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Subtitle label="Especialización en cada tipo de instalación" />
      <p className="text-sm text-[#4E4E4E] font-light text-center sm:text-lg">
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
          {servicesListData.map((service: IServicesListData, i: number) => (
            <div
              key={i}
              className={clsx(
                "flex flex-col gap-3 relative pl-7 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-primaryColor before:left-0 sm:before:top-[3px]",
                servicesListData.length - 1 !== i &&
                  "after:content-[''] after:absolute after:w-[1px] after:h-[calc(100%-15px)] after:bg-primaryColor after:left-[10px] after:top-7 sm:after:top-[30px]"
              )}
            >
              <h4 className="text-primaryColor sm:text-xl">{service.title}</h4>
              <p className="text-[#4E4E4E] text-sm font-light sm:text-base">
                {service.description}
              </p>
              <ul className="text-xs font-light text-[#4E4E4E] list-inside list-disc sm:text-sm">
                {service.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:overflow-hidden xl:hidden">
                {service.images.map((image: StaticImageData, i: number) => (
                  <Image
                    key={i}
                    className="w-full h-[200px] rounded-[8px] object-cover sm:w-[calc(50%-6px)]"
                    src={image}
                    alt="Imagen de la instalación"
                    priority
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden xl:grid">
          <ImagesCollage />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
