"use client";

import Image from "next/image";
import React, { useRef } from "react";
import newssletterImg from "@/public/assets/ilustrations/home/newsletter.svg";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";
import { motion, useInView } from "motion/react";

const Newsletter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="flex flex-col items-center">
      <HomeTitle text="" justLine />

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
        className="mt-14 w-full flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between"
      >

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <Image
            src={newssletterImg}
            alt="Newsletter imagen"
            className="w-[180px] mb-4 sm:w-[200px] sm:mb-7 lg:w-[300px] xl:w-[400px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4 lg:items-start"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h3
            className="flex flex-col text-center text-[20px] font-bold sm:text-[26px] lg:text-left xl:text-[28px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <span>Suscríbete a nuestro</span> <span>newsletter</span>
          </motion.h3>

          <motion.p
            className="flex flex-col text-center text-[14px] sm:text-[16px] lg:text-left xl:text-[18px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <span className="hidden sm:block">
              Déjanos tu mail para recibir novedades, ofertas exclusivas y
            </span>
            <span className="hidden sm:block">
              actualizaciones de nuestros proyectos.
            </span>
            <span className="sm:hidden">
              Déjanos tu mail para recibir novedades, ofertas exclusivas y
              actualizaciones de nuestros proyectos.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col justify-center w-full h-[125px] max-w-[530px] rounded-tl-[30px] rounded-br-[30px] bg-gradient-to-r from-[#A79351]/70 to-[#A79351]/100 px-6 sm:h-[160px] xl:w-[580px] xl:h-[200px] xl:rounded-tl-[50px] xl:rounded-br-[50px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <label
              htmlFor="email"
              className="text-white text-[14px] block mb-2 sm:text-[16px] xl:text-[18px]"
            >
              Correo electrónico*
            </label>
            <div className="flex h-11 text-[14px] sm:text-[16px] xl:text-[18px]">
              <input
                type="email"
                id="email"
                className="flex-1 px-3 outline-none text-black w-[50%] h-[43px] sm:h-[50px] xl:h-[56px]"
              />
              <button className="bg-black text-white px-4 rounded-r-lg h-[43px] hover:bg-black/90 transition-all duration-200 sm:w-[30%] sm:h-[50px] xl:h-[56px]">
                Suscribirse
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
