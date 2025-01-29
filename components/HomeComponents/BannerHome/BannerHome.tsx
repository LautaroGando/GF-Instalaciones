import Image from "next/image";
import React from "react";
import banner from "@/public/assets/images/banner.png";

const BannerHome = () => {
  return (
    <div className="relative mb-[70px]">
      <Image
        src={banner}
        alt="Banner"
        className="w-full min-h-[180px] sm:min-h-[300px] md:min-h-[310px] lg:min-h-[390px] xl:min-h-[427px]"
      />

      <div className="absolute bottom-[20px] left-[8px] flex items-center justify-center gap-2 sm:bottom-[26px] sm:left-[20px] md:gap-[12px]">
        <span className="h-[38px] w-[4px] rounded-[100px] bg-primaryColor block sm:h-[46px] md:h-[50px] lg:h-[60px] xl:h-[80px]"></span>
        <p className="flex flex-col text-white text-[14px] font-bold leading-[122%] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
          <span>SOMOS LA RED DE INSTALADORES MÁS</span> <span>GRANDES DEL PAÍS</span>
        </p>
      </div>
    </div>
  );
};

export default BannerHome;
