"use client";

import { motion } from "framer-motion";
import { numberToText } from "@/utils/numberToText";
import React from "react";
import IClientOrdersHeaderProps from "./types";
import clsx from "clsx";

const ClientOrdersHeader: React.FC<IClientOrdersHeaderProps> = ({
  finalCount,
  contentToShow,
  onViewChange,
}) => {
  const orderText = numberToText(finalCount);
  const isCompleted = contentToShow === "completed";
  const textToShow = isCompleted ? "órdenes completadas" : "órdenes en proceso";

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
      }}
      className="xl:w-[780px] w-full mx-auto px-4"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
        className="text-primaryColor text-2xl sm:text-3xl md:text-4xl font-bold text-center "
      >
        MIS ÓRDENES
      </motion.h2>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
        className="flex items-center justify-center gap-2 mt-6 mb-6 sm:mb-12 h-[48px] sm:h-[56px]"
      >
        <button
          onClick={() => onViewChange("in process")}
          className={clsx(
            "flex-1 h-full flex items-center justify-center text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryColor",
            contentToShow === "in process"
              ? "bg-primaryColor/10 text-primaryColor border-b-2 border-primaryColor shadow-inner dark:bg-primaryColor/10 dark:text-primaryColor"
              : "text-gray-500 dark:text-gray-300 hover:text-primaryColor hover:bg-primaryColor/5 dark:hover:bg-primaryColor/10 hover:shadow-md hover:scale-[1.02]"
          )}
        >
          Órdenes
        </button>

        <button
          onClick={() => onViewChange("completed")}
          className={clsx(
            "flex-1 h-full flex items-center justify-center text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-admin-activeColor",
            contentToShow === "completed"
              ? "bg-admin-activeColor/10 text-admin-activeColor border-b-2 border-admin-activeColor shadow-inner dark:bg-admin-activeColor/10 dark:text-admin-activeColor"
              : "text-gray-500 dark:text-gray-300 hover:text-admin-activeColor hover:bg-admin-activeColor/5 dark:hover:bg-admin-activeColor/10 hover:shadow-md hover:scale-[1.02]"
          )}
        >
          Historial
        </button>
      </motion.div>

      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.4, delay: 1.5, ease: "easeOut" },
          },
        }}
        className="text-sm min-h-[40px] dark:text-white/70 md:text-base text-center text-gray-500 font-medium tracking-wide mb-8"
      >
        {textToShow}:{" "}
        <span
          className={clsx(
            "font-bold underline",
            isCompleted ? "text-admin-activeColor" : "text-primaryColor"
          )}
        >
          {finalCount}
        </span>{" "}
        ({orderText})
      </motion.p>
    </motion.section>
  );
};

export default ClientOrdersHeader;
