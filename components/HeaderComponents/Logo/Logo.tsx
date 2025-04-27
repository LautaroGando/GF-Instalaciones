import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/header/logo.svg";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center transition-all duration-300 active:scale-95"
    >
      <Image
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
        src={logo}
        alt="Logo de la empresa"
        priority
      />
      <h2 className="font-textFont sm:text-lg">Instalaciones</h2>
    </Link>
  );
};

export default Logo;
