import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/header/logo.svg";

export const Logo: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
        src={logo}
        alt="Logo de la empresa"
      />
      <h2 className="font-textFont sm:text-lg">Instalaciones</h2>
    </div>
  );
};

export default Logo;
