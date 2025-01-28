import React from "react";
import Image from "next/image";
import starImage from "@/public/assets/ilustrations/home/star.svg";
import { IHighlightItemProps } from "./types";

const HighlightItem: React.FC<IHighlightItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[11px] p-4 bg-primaryTransparentColor border-b-[3px] border-primaryColor">
      <div>
        <Image
          src={starImage}
          width={80}
          height={80}
          alt="Imagen de estrella"
          className="size-[40px]"
        />
      </div>
      <h3 className="text-[14px] text-primaryColor font-semibold">{title}</h3>
      <p className="text-center text-[12px] text-primaryColor">{description}</p>
    </div>
  );
};

export default HighlightItem;
