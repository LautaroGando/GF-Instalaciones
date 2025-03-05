import React from "react";
import { ILoadingProps } from "./types";
import { motion } from "motion/react";
import clsx from "clsx";

export const Loading: React.FC<ILoadingProps> = ({ theme }: ILoadingProps) => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className={clsx(
        "mx-auto w-[42px] h-[42px] rounded-full border-t-[3px] border-[3px]",
        theme === "dark"
          ? "border-primaryColor border-t-bgColor"
          : "border-bgColor border-t-primaryColor"
      )}
    ></motion.div>
  );
};

export default Loading;
