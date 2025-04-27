"use client";
import IOrder from "@/interfaces/IOrder";
import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue, animate, useTransform } from "framer-motion";
import Link from "next/link";

const ClientInstallationsHeader: React.FC<{ order: IOrder }> = ({ order }) => {
  const progress = useMotionValue(0);
  const controls = useAnimation();

  const width = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    const progressNumber = parseFloat(order?.progress || "0");

    animate(progress, progressNumber, {
      duration: 1.5,
      ease: "easeInOut",
    });

    controls.start("visible");
  }, [order?.progress, controls, progress]);

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        }}
        initial="hidden"
        animate="visible"
        className="mb-4 flex"
      >
        <Link
          href="/my-orders"
          className="inline-flex items-center gap-2 rounded-md border border-primaryColor px-4 py-2 text-primaryColor text-sm font-semibold transition-all hover:bg-primaryColor/80 hover:text-white hover:shadow-md active:bg-primaryColor"
        >
          ← Volver
        </Link>
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="text-primaryColor text-2xl text-center sm:text-3xl md:text-4xl font-semibold"
      >
        Instalaciones de la orden <span className="font-bold">{order?.orderNumber}</span>
      </motion.h2>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="mt-4 mb-8 sm:mb-12"
      >
        <p className="text-sm sm:text-base text-center text-muted-foreground tracking-wide font-medium mb-2">
          Instalaciones completadas
        </p>

        <div className="flex justify-center">
          <motion.div
            className="relative w-max"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-[300px] sm:w-[400px] h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                style={{ width }}
                className="h-full rounded-full bg-admin-activeColor/70"
              />
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
              }}
              className="absolute right-[-20px] sm:right-[-40px] top-[-2] -translate-y-1/2 text-xs sm:text-sm font-semibold text-admin-activeColor sm:top-[-4]"
            >
              {order?.installationsFinished}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ClientInstallationsHeader;
