import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/auth/logoSignIn.svg";

export const Logo: React.FC = () => {
  return (
    <div className="flex mx-auto relative w-[170px] h-[90px] mt-20">
      <Image
        className="w-[73px] absolute"
        src={logo}
        alt="Logo del Admin"
        priority
      />
      <h2 className="self-end text-right w-full text-[36px] text-letterColorLight">
        Admin
      </h2>
    </div>
  );
};

export default Logo;
