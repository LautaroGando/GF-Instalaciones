"use client";
import React, { useEffect, useState } from "react";
import { usePath } from "@/hooks/usePath";
import Image from "next/image";
import { bannerHomeData } from "@/data/HomeComponents/BannerHomeData/banner-home-data";
import { IBannerHomeData } from "@/data/HomeComponents/BannerHomeData/types";
import { motion } from "motion/react";
import { useSize } from "@/hooks/useSize";

const BannerHome = () => {
  const { pathname } = usePath();
  const [counter, setCounter] = useState<number>(0);
  const { size } = useSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  if (pathname !== "/") return null;

  return (
    <div className="relative mb-[70px]">
      <div className="bg-black/70 absolute inset-0 w-full h-[70vh] z-10"></div>

      <div className="relative w-full min-h-[70vh] max-h-[70vh] overflow-hidden flex">
        {bannerHomeData.map((img: IBannerHomeData, i: number) => {
          return (
            <motion.div
              key={img.id}
              initial={false}
              animate={
                size < 1024
                  ? { flex: i === counter ? 1 : 0 }
                  : { flex: i === counter ? 4 : 1 }
              }
              transition={{ duration: 0.8 }}
            >
              <Image
                className="w-full h-[100vh] object-cover object-center"
                src={img.img}
                alt="Imagen de instalación"
                priority
              />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-[20px] left-[8px] flex items-center justify-center gap-2 z-20 sm:bottom-[26px] sm:left-[20px] md:gap-[12px]">
        <span className="h-[94.9px] w-[4px] rounded-[100px] bg-primaryColor block sm:h-[129.23px] lg:h-[202.4px] xl:h-[225.07px]"></span>
        <div>
          <p className="flex flex-col text-white text-[15px] font-bold leading-[122%] sm:text-[20px] lg:text-[40px] xl:text-[44px]">
            <span>SOMOS LA RED DE INSTALADORES DE</span>
            <span>GRÁFICA LIVIANA MÁS</span>
            <span>GRANDE DEL PAÍS</span>
          </p>
          <p className="text-letterColorLight text-sm max-w-[428px] sm:text-lg sm:max-w-[630px] lg:text-xl xl:text-2xl xl:max-w-[750px]">
            Más de 28 años de experiencia. Más de 120 instaladores activos en
            todo el país.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
