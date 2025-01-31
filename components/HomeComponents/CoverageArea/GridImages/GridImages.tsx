import React from "react";
import coverage1 from "@/public/assets/images/home/coverage-1.svg";
import coverage2 from "@/public/assets/images/home/coverage-2.svg";
import coverage3 from "@/public/assets/images/home/coverage-3.svg";
import Image from "next/image";

export const GridImages: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center md:w-[309px] md:min-w-[309px] lg:min-w-[371px] xl:min-w-[500px]">
      <div className="flex flex-col gap-2 justify-center">
        <Image
          src={coverage1}
          alt="Imagen de cobertura 1"
          className="w-[87px] h-[150px] sm:w-[100px] sm:h-[174px] lg:w-[112px] lg:h-[200px] xl:w-[140px] xl:h-[250px]"
          priority
        />
        <Image
          src={coverage2}
          alt="Imagen de cobertura 2"
          className="w-[87px] h-[150px] sm:w-[100px] sm:h-[174px] lg:w-[112px] lg:h-[200px] xl:w-[140px] xl:h-[250px]"
          priority
        />
      </div>
      <Image
        src={coverage3}
        alt="Imagen de cobertura 3"
        className="w-[173px] h-[320px] sm:w-[200px] sm:h-[365px] lg:w-[230px] lg:h-[420px] xl:w-[300px] xl:h-[510px]"
        priority
      />
    </div>
  );
};

export default GridImages;
