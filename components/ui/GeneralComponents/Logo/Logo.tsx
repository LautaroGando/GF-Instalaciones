import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/auth/logoSignIn.svg";
import { ILogoProps } from "./types";
import clsx from "clsx";

export const Logo: React.FC<ILogoProps> = ({ label }: ILogoProps) => {
  return (
    <div
      className={clsx(
        "flex mx-auto relative h-[90px] lg:z-50",
        label === "Instaladores" ? "w-[270px]" : "w-[170px] mt-20 lg:mt-0"
      )}
    >
      <Image
        className="w-[73px] absolute"
        src={logo}
        alt="Logo del Admin"
        priority
      />
      <h2 className="self-end text-right w-full text-[36px] text-letterColorLight">
        {label}
      </h2>
    </div>
  );
};

export default Logo;
