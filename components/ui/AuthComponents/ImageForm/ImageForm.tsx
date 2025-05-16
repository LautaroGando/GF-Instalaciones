"use client";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

export const ImageForm: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <motion.img
      src={
        view === "signIn"
          ? "/assets/images/auth/img-login.png"
          : "/assets/images/auth/img-register.png"
      }
      initial={view === "signUp" ? { x: "100%" } : { x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "w-full bg-[#e8dfc8] object-contain backdrop-blur-md absolute top-0 left-0 z-10",
        view === "signUp" ? "h-[1712px]" : "h-full"
      )}
    ></motion.img>
  );
};

export default ImageForm;
