"use client";

import React, { useRef } from "react";
import IHomeTitleProps from "./types";
import clsx from "clsx";
import { motion, useInView } from "motion/react";

const HomeTitle: React.FC<IHomeTitleProps> = ({ text, justLine = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView && "show"}
      className={clsx(
        "flex flex-col items-center justify-center mt-20 mb-5 w-full",
        justLine && "mt-0"
      )}
      variants={{
        hidden: {},
        show: {},
      }}
    >
      <motion.span
        className="block w-[200px] h-[1px] bg-primaryColor sm:w-[350px] lg:w-[450px] xl:w-[600px]"
        initial={{ scaleX: 0 }}
        animate={isInView && { scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: .2 }} 
        style={{ transformOrigin: "left center" }}
      />

      {!justLine && (
        <motion.h2
          className="font-titleFont font-bold text-primaryColor text-center mt-5 text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[36px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: .7 }} 
        >
          {text}
        </motion.h2>
      )}
    </motion.div>
  );
};

export default HomeTitle;
