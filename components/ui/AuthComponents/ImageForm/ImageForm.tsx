"use client";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

export const ImageForm: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <motion.div
      initial={view === "signUp" ? { x: "100%" } : { x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "w-full bg-secondaryColor/80 backdrop-blur-md absolute top-0 left-0 z-10",
        view === "signUp" ? "h-[1502px]" : "h-full",
      )}
    ></motion.div>
  );
};

export default ImageForm;
