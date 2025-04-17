'use client';
import InstallationsTableHeaders from '@/utils/InstallationsTableHeaders';
import { motion } from 'framer-motion';
import React from 'react';

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

const InstallationsTableHeader = () => {
  return (
    <motion.thead
      initial="hidden"
      animate="visible"
      variants={theadVariants}
    >
      <motion.tr
        layout
        className="sticky top-0 border-b border-primaryColor"
      >
        {InstallationsTableHeaders.map((item, i) => (
          <motion.th
            key={i}
            variants={thVariants}
            className="px-4 h-12 whitespace-nowrap border-b border-primaryColor text-[14px] font-semibold tracking-wide"
          >
            {item}
          </motion.th>
        ))}
      </motion.tr>
    </motion.thead>
  );
};

export default InstallationsTableHeader;
