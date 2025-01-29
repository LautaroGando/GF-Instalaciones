import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/header/logo.svg";

export const Logo: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        className="w-[70px] h-[70px]"
        src={logo}
        alt="Logo de la empresa"
      />
      <h2 className="font-textFont text-2xl">Instalaciones</h2>
    </div>
  );
};

export default Logo;
