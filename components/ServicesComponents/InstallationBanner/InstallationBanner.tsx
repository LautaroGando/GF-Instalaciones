import React from "react";
import BannerServices from "./BannerServices/BannerServices";

export const InstallationBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <h1 className="text-primaryColor text-xl font-medium sm:text-3xl">
        Instalamos Gráfica de Gran Formato en todo el País
      </h1>
      <p className="text-sm tracking-[3px] max-w-[550px] sm:text-base">
        Vehículos, Puntos de Venta, Eventos, Altura y Corpóreos: donde esté tu
        proyecto, ahí estamos nosotros.
      </p>
      <BannerServices />
    </div>
  );
};

export default InstallationBanner;
