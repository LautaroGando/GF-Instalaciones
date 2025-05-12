"use client";

import React from "react";
import { IHighlightItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const HighlightItem: React.FC<IHighlightItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="flex flex-col flex-1 items-center justify-start gap-[11px] p-4 min-h-[216px] bg-primaryTransparentColor border-b-[3px] border-primaryColor md:mx-auto md:w-[100%] md:max-w-[280px] lg:max-w-[295px] lg:gap-[17px] xl:max-w-[390px]"
    >
      <div className="mb-2">
        <FontAwesomeIcon
          icon={icon}
          className="size-[40px] text-primaryColor select-none lg:size-[55px] xl:size-[80px]"
          width={80}
        />
      </div>
      <h3 className="text-center text-lg text-primaryColor font-semibold sm:w-[90%] md:w-[80%] lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-center text-primaryColor xl:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default HighlightItem;
