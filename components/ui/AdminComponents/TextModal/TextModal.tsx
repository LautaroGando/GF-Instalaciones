"use client";

import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const TextModal: React.FC = () => {
  const { isOpen, title, text, closeModal } = useTextModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          onClick={closeModal}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
        >
          <motion.div
            key="modal"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-bgColor p-6 rounded-lg shadow-lg w-full max-w-md relative z-60 dark:bg-secondaryColor dark:shadow-bgColor/20
             max-h-[90vh] overflow-hidden flex flex-col"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-[20px] font-bold text-primaryColor mb-4 shrink-0"
            >
              {title}:
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="overflow-y-auto text-gray-700 dark:text-letterColorLight flex-1 pr-1"
            >
              <div dangerouslySetInnerHTML={{ __html: text || "" }} />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              onClick={closeModal}
              className="mt-6 w-full bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover shrink-0"
            >
              Cerrar
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TextModal;
