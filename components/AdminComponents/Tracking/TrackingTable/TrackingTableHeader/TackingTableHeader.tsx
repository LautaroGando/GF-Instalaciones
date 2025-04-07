'use client';
import TrackingTableHeaders from "@/utils/TrackingTableHeaders";
import { motion } from "framer-motion";
import React from "react";

const theadVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const thVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

export const TrackingTableHeader = () => {
  return (
    <motion.thead
      initial="hidden"
      animate="visible"
      variants={theadVariants}
    >
      <motion.tr
        layout
        className="sticky top-0 bg-bgColor border-b border-primaryColor"
      >
        {TrackingTableHeaders.map((item, i) => (
          <motion.th
            key={i}
            variants={thVariants}
            className="px-4 h-12 whitespace-nowrap border-b border-primaryColor text-bgColorDark/80 text-[14px] font-semibold tracking-wide"
          >
            {item}
          </motion.th>
        ))}
      </motion.tr>
    </motion.thead>
  );
};

export default TrackingTableHeader;
