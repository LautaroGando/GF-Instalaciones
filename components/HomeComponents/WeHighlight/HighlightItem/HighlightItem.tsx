import React from "react";
import Image from "next/image";
import starImage from "@/public/assets/ilustrations/home/star.svg";
import { IHighlightItemProps } from "./types";

const HighlightItem: React.FC<IHighlightItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-[11px] p-4 bg-primaryTransparentColor border-b-[3px] border-primaryColor md:mx-auto md:w-[100%] md:max-w-[280px] lg:max-w-[295px] lg:gap-[17px] xl:max-w-[390px]">
      <div className="mb-2">
        <Image
          src={starImage}
          alt="Imagen de estrella"
          className="size-[40px] select-none lg:size-[55px] xl:size-[80px]"
        />
      </div>
      <h3 className="text-center text-[14px] text-primaryColor font-semibold lg:text-[18px] xl:text-[24px]">
        {title}
      </h3>
      <p className="text-center text-[12px] text-primaryColor lg:text-[14px] xl:text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default HighlightItem;
