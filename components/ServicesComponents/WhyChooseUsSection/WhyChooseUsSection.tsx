"use client";

import backgroundImage from "@/public/assets/images/auth/logoSignIn.svg";
import React, { useRef } from "react";
import Image from "next/image";
import WhyChooseUsSectionItems from "@/components/ui/ServicesComponents/WhyChooseUsSectionItems/WhyChooseUsSectionItems";
import { motion, useInView } from "framer-motion";

const WhyChooseUsSection = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });
  const isImgInView = useInView(imgRef, {
    once: true,
    margin: "-100px",
    amount: 0.4,
  });

  return (
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-[50px] w-screen bg-secondaryColor/85 overflow-hidden text-white py-[25px] sm:h-[570px] ">
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0 }}
        animate={isImgInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 top-[25%] -translate-x-1/2 size-[260px] pointer-events-none z-0 sm:size-[350px] sm:top-[20%] lg:size-[400px] lg:top-[15%]"
      >
        <Image
          src={backgroundImage}
          alt="Imagen de fondo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-4">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-[22px] font-bold text-center sm:text-[28px] sm:mb-11 md:text-[32px] lg:mb-[68px]"
        >
          ¿Por qué elegirnos para tu instalación?
        </motion.h2>

        <WhyChooseUsSectionItems />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
