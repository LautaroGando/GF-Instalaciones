"use client";

import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { motion } from "framer-motion";
import React from "react";

const TextModal: React.FC = () => {
  const { isOpen, title, text, closeModal } = useTextModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed px-4 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-[20px] font-bold text-primaryColor mb-4">{title}:</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-y-auto max-h-[300px] text-gray-700"
        >
          {text}
        </motion.div>
        <button
          onClick={closeModal}
          className="mt-20 w-full bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default TextModal;
