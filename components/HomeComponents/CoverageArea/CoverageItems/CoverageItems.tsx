import { coverageItems } from "@/data/CoverageItems/coverage-items";
import { ICoverageItem } from "@/data/CoverageItems/types";
import check from "@/public/assets/images/home/check.svg";
import Image from "next/image";
import React from "react";

export const CoverageItems: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[460px] mx-auto">
      <h3 className="text-lg font-semibold text-center sm:text-xl">En todo el país</h3>
      <div className="flex flex-col gap-8">
        {coverageItems.map((item: ICoverageItem, i: number) => (
          <div key={i} className="flex gap-3 items-center">
            <Image className="w-5 h-5 sm:w-[22px] sm:h-[22px]" src={check} alt="Icono de check" priority />
            <p className="text-xs sm:text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageItems;
