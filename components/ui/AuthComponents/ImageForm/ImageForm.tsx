"use client";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export const ImageForm: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <motion.div
      initial={view === "signUp" ? { x: "100%" } : { x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "w-full bg-[#e8dfc8] backdrop-blur-md overflow-hidden absolute top-0 left-0 z-10 flex items-center justify-center",
        view === "signUp" ? "h-[1712px]" : "h-full"
      )}
    >
      <Image
        src={
          view === "signIn"
            ? "/assets/images/auth/img-login.png"
            : "/assets/images/auth/img-register.png"
        }
        alt="Imagen del ingreso"
        className="object-contain"
        width={1920}
        height={1080}
      />
    </motion.div>
  );
};

export default ImageForm;
