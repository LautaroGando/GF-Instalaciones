"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const InstallersSelectModal: React.FC = () => {
  const { isOpen, closeModal, addInstaller, selectedInstallers, deleteInstaller } =
    useInstallersSelectModal();
  const { installers, handleFetchInstallers } = useUserStore();

  useEffect(() => {
    handleFetchInstallers();
  }, [handleFetchInstallers]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-[500px] sm:p-8"
      >
        <h2 className="text-xl font-semibold text-primaryColor mb-5 text-center">
          Seleccionar Instalador
        </h2>

        <div className="flex flex-col gap-3 rounded-lg overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
          {installers?.map((installer) => (
            <div
              key={installer.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleUser} className="text-gray-500 text-2xl" />
                <p className="text-gray-800 font-medium">{installer.user.fullName}</p>
              </div>

              {selectedInstallers.some((inst) => inst.id === installer.id) ? (
                <button
                  onClick={() => deleteInstaller(installer.id)}
                  className="border border-red-500 text-red-500 px-4 py-1.5 rounded-lg transition-all duration-200 hover:bg-red-500 hover:text-white"
                >
                  Desasignar
                </button>
              ) : (
                <button
                  onClick={() => addInstaller(installer)}
                  className="bg-primaryColor text-white px-4 py-1.5 rounded-lg transition-all duration-200 hover:bg-primaryColorHover"
                >
                  Asignar
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={closeModal}
            className="w-full bg-gray-700 text-white py-2 rounded-lg transition-all duration-200 hover:bg-gray-800"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InstallersSelectModal;
