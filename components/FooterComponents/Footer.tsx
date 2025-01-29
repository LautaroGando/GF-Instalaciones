import React from "react";
import Image from "next/image";
import footerImage from "@/public/assets/images/footer/logoFooter.svg";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-primaryTransparentColor p-[22px]">
      <div>
        <p className="font-semibold text-primaryColor text-[16px] text-center sm:text-[22px] lg:text-[24px] lg:mb-[30px] xl:text-[28px]">
          Seguínos en Nuestras Redes
        </p>
        <SocialMedia />
        <Image
          src={footerImage}
          alt="imagen de GF Instalaciones"
          className="w-full max-w-[520px] mx-auto"
        />
        <span className="w-full max-w-[1200px] mx-auto h-[1px] bg-primaryColor block my-4 lg:my-6 xl:my-10"></span>
        <p className="flex flex-col text-[12px] text-center text-primaryColor leading-[220%] sm:text-[18px] lg:text-[20px]">
          <span className="hidden sm:block">
            Copyright © Todos los derechos reservados 2020-2025
          </span>
          <span className="hidden sm:block">Diseñado por Código Total</span>
          <span className="sm:hidden">Copyright © Todos los derechos reservados</span>
          <span className="sm:hidden">2020-2025 Diseñado por Código Total</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
