"use client";

import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const InstallationNoteModal: React.FC = () => {
  const { isOpen, installation, title, text, images, closeModal } =
    useInstallationNoteModalStore();
  const { handleInstallationStatus } = useTrackingStore();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
        >
          <motion.div
            key="modal"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative z-60"
          >
            <h2 className="text-xl font-semibold mb-4 text-neutral-900">{title}</h2>

            <div className="text-sm text-neutral-800 leading-relaxed max-h-[400px] overflow-y-auto">
              <div dangerouslySetInnerHTML={{ __html: text || "" }} />

              {images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-lg shadow overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`Imagen ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {installation?.id && installation.status === 'A revisar' && (
                <button
                  onClick={() => {
                    handleInstallationStatus(installation.id, "Finalizada");
                    closeModal();
                  }}
                  className="mt-6 w-full bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover"
                >
                  Finalizar Instalación
                </button>
              )}
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white rounded-md py-2 transition hover:bg-gray-500"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallationNoteModal;
