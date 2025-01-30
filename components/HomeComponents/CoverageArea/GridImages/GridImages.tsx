import React from "react";
import coverage1 from "@/public/assets/images/home/coverage-1.svg";
import coverage2 from "@/public/assets/images/home/coverage-2.svg";
import coverage3 from "@/public/assets/images/home/coverage-3.svg";
import Image from "next/image";

export const GridImages: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center">
      <div className="flex flex-col gap-2 justify-center">
        <Image
          src={coverage1}
          alt="Imagen de cobertura 1"
          className="w-[87px] h-[150px] sm:w-[100px] sm:h-[174px]"
          priority
        />
        <Image
          src={coverage2}
          alt="Imagen de cobertura 2"
          className="w-[87px] h-[150px] sm:w-[100px] sm:h-[174px]"
          priority
        />
      </div>
      <Image
        src={coverage3}
        alt="Imagen de cobertura 3"
        className="w-[173px] h-[320px] sm:w-[200px] sm:h-[365px]"
        priority
      />
    </div>
  );
};

export default GridImages;
