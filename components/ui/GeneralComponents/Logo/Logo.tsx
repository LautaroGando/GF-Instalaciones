import Image from "next/image";
import React from "react";
import logoAdmin from "@/public/assets/images/auth/logoSignIn.svg";
import logoInstaller from "@/public/assets/images/auth/logoSignUp.svg";
import { ILogoProps } from "./types";
import clsx from "clsx";

export const Logo: React.FC<ILogoProps> = ({ label }: ILogoProps) => {
  return (
    <div
      className={clsx(
        "flex relative lg:z-50",
        label === "Instaladores" || label === 'Instalaciones'
          ? "w-[180px] h-[65px]"
          : "w-[180px] h-[90px] mt-20 mx-auto lg:mt-0"
      )}
    >
      <Image
        className={clsx(
          "absolute",
          label === "Instaladores" ? "w-[61px]" : "w-[73px]"
        )}
        src={label === "Instaladores" || label === 'Instalaciones' ? logoInstaller : logoAdmin}
        alt="Logo del Admin"
        priority
      />
      <h2
        className={clsx(
          "self-end text-right w-full",
          label === "Instaladores" || label === 'Instalaciones'
            ? "text-primaryColor text-xl"
            : "text-letterColorLight text-[36px]"
        )}
      >
        {label}
      </h2>
    </div>
  );
};

export default Logo;
