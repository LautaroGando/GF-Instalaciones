import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/dashboard/logo.svg";

export const Banner: React.FC = () => {
  return (
    <div className="bg-dashboardBanner absolute left-0 w-full h-[346px] bg-cover bg-center mt-[800px] sm:mt-[600px] lg:mt-96">
      <div className="w-full h-full bg-secondaryColor/70 flex justify-center items-center relative text-center p-5">
        <h2 className="text-letterColorLight text-lg font-medium leading-loose max-w-[470px] sm:text-2xl sm:leading-10">
          ¡Gracias por unirte a la red más grande de instaladores
          del país!
        </h2>
        <Image
          className="absolute bottom-3 right-3"
          src={logo}
          alt="Logo de GF Instalaciones"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
