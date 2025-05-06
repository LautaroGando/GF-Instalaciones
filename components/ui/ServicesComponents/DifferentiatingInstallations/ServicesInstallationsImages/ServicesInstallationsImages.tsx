"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IServicesInstallationsImagesProps } from "./types";

const ServicesInstallationsImages: React.FC<IServicesInstallationsImagesProps> = ({
  showAll,
  setShowAll,
  setSelectedImage,
  images,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <div className="relative select-none">
      <div
        ref={containerRef}
        className={clsx(
          "mt-7 p-4 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 ease-in-out overflow-hidden",
          showAll ? "max-h-[2000px]" : "max-h-[350px]"
        )}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedImage(img.src)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="group cursor-pointer rounded-[8px] border border-white transition-all duration-300 ease-in-out scale-100 shadow-[2px_2px_4px_rgba(0,0,0,0.75)] hover:shadow-[2px_2px_8px_rgba(0,0,0,0.5)] hover:scale-[1.015] dark:border-white/70 dark:shadow-[2px_2px_8px_rgba(100,100,100,0.75)] dark:hover:shadow-[2px_2px_16px_rgba(100,100,100,0.5)]"
          >
            <Image
              src={img}
              alt="Imagen de instalación"
              className="w-full h-[190px] sm:h-[220px] lg:h-[210px] rounded-[8px] object-cover transition-transform duration-500 ease-out group-hover:brightness-105 group-hover:contrast-105 group-active:scale-[0.99]"
            />
          </motion.div>
        ))}
      </div>

      <div
        className={clsx(
          "pointer-events-none absolute bottom-[76px] h-20 w-full bg-gradient-to-t from-white to-transparent dark:from-black transition-opacity duration-700 z-10",
          showAll ? "opacity-80" : "opacity-100"
        )}
      />

      <button
        onClick={() => setShowAll(!showAll)}
        className="relative z-20 text-primaryColor font-semibold mt-6 mb-8 sm:text-lg hover:opacity-80 transition"
      >
        {showAll ? "Ver menos ↑" : "Ver más casos ↓"}
      </button>
    </div>
  );
};

export default ServicesInstallationsImages;
