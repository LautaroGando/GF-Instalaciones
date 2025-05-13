"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WhyChooseUsItem from "../WhyChooseUsSection/WhyChooseUsItem/WhyChooseUsItem";
import whyChooseUsItems from "@/utils/whyChooseUsItem";

const WhyChooseUsSectionItems = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px", amount: 0.4 });

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-6 px-3 sm:px-5 sm:gap-[36px] lg:grid lg:grid-cols-2 lg:gap-y-[90px]"
    >
      {whyChooseUsItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.align === "left" ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
        >
          <WhyChooseUsItem icon={item.icon} text={item.text} align={item.align} />
        </motion.div>
      ))}
    </div>
  );
};

export default WhyChooseUsSectionItems;
