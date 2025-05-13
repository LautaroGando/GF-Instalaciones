"use client";

import { coverageItems } from "@/data/CoverageItems/coverage-items";
import { ICoverageItem } from "@/data/CoverageItems/types";
import check from "@/public/assets/images/home/check.svg";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export const CoverageItems: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView && "show"}
      className="flex flex-col gap-4 max-w-[460px] mx-auto md:max-w-[480px] md:mx-0 lg:max-w-max"
    >
      <motion.h3
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        className="text-lg font-semibold text-center text-primaryColor sm:text-xl md:text-left lg:text-2xl xl:text-[30px]"
      >
        En todo el país
      </motion.h3>

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.20,
              delayChildren: 0.25,
            },
          },
        }}
        className="flex flex-col gap-8"
      >
        {coverageItems.map((item: ICoverageItem, i: number) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            className="flex gap-3 items-center"
          >
            <Image
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[30px] xl:h-[30px]"
              src={check}
              alt="Icono de check"
              priority
            />
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoverageItems;
