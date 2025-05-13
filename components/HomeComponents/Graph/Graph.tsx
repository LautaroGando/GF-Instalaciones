"use client";

import React, { useRef } from "react";
import PreviewJobs from "./PreviewJobs/PreviewJobs";
import InfoGraph from "./InfoGraph/InfoGraph";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";
import { motion, useInView } from "motion/react";

export const Graph: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="flex flex-col gap-10 -mt-[70px]"
      initial="hidden"
      animate={isInView && "show"}
      variants={{
        hidden: {},
        show: {
          transition: {
            delay: 0.4,
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <HomeTitle text="¿Necesitas instalar gráfica?" />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 lg:flex-row lg:gap-10"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="flex-1"
        >
          <PreviewJobs />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="flex-1"
        >
          <InfoGraph />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Graph;
