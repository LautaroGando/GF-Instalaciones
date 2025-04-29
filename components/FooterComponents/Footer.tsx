import React from "react";
import Image from "next/image";
import footerImage from "@/public/assets/images/footer/logoFooter.svg";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primaryTransparentColor p-[22px]">
      <div className="flex flex-col gap-7">
        <p className="font-semibold text-primaryColor text-[16px] text-center sm:text-[22px] lg:text-[24px] xl:text-[28px]">
          Seguínos en nuestras redes
        </p>
        <SocialMedia />
        <Image
          src={footerImage}
          alt="imagen de GF Instalaciones"
          className="w-full max-w-[520px] mx-auto"
        />
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center text-primaryColor text-xs gap-2 sm:text-base">
            <Link className="hover:underline" href="/terms-and-conditions">
              Términos y condiciones
            </Link>
            -
            <Link className="hover:underline" href="/privacy-and-policy">
              Política de privacidad
            </Link>
          </div>
          <span className="w-full h-[1px] bg-primaryColor block"></span>
        </div>
        <p className="flex flex-col text-[12px] text-center text-primaryColor leading-[220%] sm:text-[18px] lg:text-[20px]">
          <span className="hidden sm:block">
            Copyright © Todos los derechos reservados 2020-2025
          </span>
          <span className="hidden sm:block">
            Diseñado por Código Total (+54 011 3269-2245)
          </span>
          <span className="sm:hidden">
            Copyright © Todos los derechos reservados
          </span>
          <span className="sm:hidden">2020-2025 Diseñado por Código Total</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
