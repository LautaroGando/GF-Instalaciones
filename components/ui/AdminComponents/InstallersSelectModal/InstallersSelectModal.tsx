"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import { useUserStore } from "@/store/UserStore/userStore";

const InstallersSelectModal = () => {
  const { isOpen, closeModal } = useInstallersSelectModal();

  const {installers} = useUserStore();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bgColorDark bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[500px]"
      >
        <h2 className="text-lg font-bold text-primaryColor mb-4">Seleccionar Instalador</h2>
        {installers?.map((installer,i)=>(
          <p key={i}>{installer.fullName}</p>
        ))}
        <button
          onClick={closeModal}
          className="mt-4 w-full bg-admin-inactiveColor text-white p-2 rounded-md"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default InstallersSelectModal;
