"use client";

import React, { useRef } from "react";
import HighlightItem from "./HighlightItem/HighlightItem";
import highlightItems from "@/data/HighlightData/highlight-data";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";
import { motion, useInView } from "motion/react";

const WeHighlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="flex flex-col gap-10">
      <HomeTitle text="¿Por qué elegir GF Instalaciones?" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView && "show"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
        className="flex flex-col gap-[20px] sm:flex-row sm:gap-[11px] md:gap-[30px] lg:gap-[15px]"
      >
        {highlightItems.map((item, i) => (
          <HighlightItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WeHighlight;
