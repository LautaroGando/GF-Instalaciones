"use client";
import { bannerData } from "@/data/ServicesComponents/BannerData/banner-data";
import { IBannerData } from "@/data/ServicesComponents/BannerData/types";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSize } from "@/hooks/useSize";
import InfoContact from "./InfoContact/InfoContact";

export const BannerServices: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const { size } = useSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="h-[570px] w-screen flex relative after:content-[''] after:absolute after:w-full after:h-full after:bg-secondaryColor/70 after:text-letterColorLight">
      {bannerData.map((img: IBannerData, i: number) => (
        <motion.div
          key={i}
          initial={false}
          animate={
            size > 1024
              ? { flex: counter === i ? 3 : 1 }
              : { flex: counter === i ? 1 : 0 }
          }
          transition={{ duration: 0.8 }}
          className={clsx(
            "w-full h-full",
            i === counter ? "flex-[6]" : "flex-1"
          )}
        >
          <Image
            className="object-cover w-full h-full"
            src={img.img}
            alt="Imagen de una instalación"
            priority
          />
        </motion.div>
      ))}
      <InfoContact />
    </div>
  );
};

export default BannerServices;
