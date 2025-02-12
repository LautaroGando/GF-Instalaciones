"use client";
import { usePathname } from "next/navigation";
import React from "react";

const BlogBanner: React.FC = () => {
  const path = usePathname();

  if (!path.startsWith("/blog") || path.includes('/article')) return;

  return (
    <div className="flex items-center justify-center bg-[#222] h-[315px] px-3 sm:h-[400px] xl:h-[560px]">
      <div className="flex flex-col justify-center items-center gap-7 w-full md:gap-11">
        <h2 className="font-bold text-[27px] text-center text-letterColorLight sm:text-[30px] xl:text-[48px]">
          Explorá todos nuestros artículos
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-[510px] md:flex-row md:max-w-[710px] md:justify-between xl:max-w-[860px]">
          <input
            type="text"
            placeholder="Buscar artículo"
            className="px-4 py-3 max-h-[44px] rounded-[50px] text-secondaryColor outline-none border-[3px] shadow-lg transition-all duration-200 focus:border-primaryColor focus:placeholder:text-primaryColor md:w-[488px] lg:max-h-[50px] xl:max-h-[56px] xl:w-[610px] xl:px-[30px]"
          />

          <button className="flex justify-center items-center text-letterColorLight px-4 py-3 text-[18px] rounded-[50px] bg-primaryColor font-semibold max-h-[44px] transition-all duration-200 border-primaryColor hover:bg-primaryColorHover hover:border-primaryColorHover md:w-[178px] lg:max-h-[50px] xl:w-[188px] xl:max-h-[56px]">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
