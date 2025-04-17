"use client";

import UserTableHeaders from "@/utils/userTableHeaders";
import { motion } from "framer-motion";
import React from "react";

const theadVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
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
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const UserTableHeader = () => {
  return (
    <motion.thead initial="hidden" animate="visible" variants={theadVariants}>
      <motion.tr layout className="sticky top-0 border-b border-primaryColor z-10">
        {UserTableHeaders.map((header, i) => (
          <motion.th
            key={i}
            variants={thVariants}
            className="px-4 h-12 whitespace-nowrap text-letterColorLight border-b border-primaryColor text-bgColorDark/80 text-[14px] font-semibold tracking-wide"
          >
            {header}
          </motion.th>
        ))}
      </motion.tr>
    </motion.thead>
  );
};

export default UserTableHeader;
