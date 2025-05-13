"use client";
import React from "react";
import coverage1 from "@/public/assets/images/home/coverage-1.png";
import coverage2 from "@/public/assets/images/home/coverage-2.png";
import coverage3 from "@/public/assets/images/home/coverage-3.png";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

const coverage1 = "/assets/images/home/coverage-1.svg";
const coverage2 = "/assets/images/home/coverage-2.svg";
const coverage3 = "/assets/images/home/coverage-3.svg";

export const GridImages: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  const images = [
    { src: coverage1, alt: "Imagen de cobertura 1", id: "img1" },
    { src: coverage2, alt: "Imagen de cobertura 2", id: "img2" },
    { src: coverage3, alt: "Imagen de cobertura 3", id: "img3" },
  ];

  return (
    <div
      ref={ref}
      className="flex gap-2 justify-center md:w-[309px] md:min-w-[309px] lg:min-w-[371px] xl:min-w-[500px]"
    >
      <div className="flex flex-col gap-2 justify-center">
        {images.slice(0, 2).map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView && { opacity: 1, scale: 1 }}
            transition={{
              duration: .3,
              delay: i * .3,
              ease: "easeOut",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={140}
              height={250}
              className="w-[87px] h-[150px] sm:w-[100px] sm:h-[174px] lg:w-[112px] lg:h-[200px] xl:w-[140px] xl:h-[250px]"
              priority
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView && { opacity: 1, scale: 1 }}
        transition={{
          duration: .3,
          delay: .5,
          ease: "easeOut",
        }}
      >
        <Image
          src={images[2].src}
          alt={images[2].alt}
          width={300}
          height={510}
          className="w-[173px] h-[320px] sm:w-[200px] sm:h-[365px] lg:w-[230px] lg:h-[420px] xl:w-[300px] xl:h-[510px]"
          priority
        />
      </motion.div>
    </div>
  );
};

export default GridImages;
