"use client";

import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

import PersonalizedPopUp from "../../GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { backdropVariants, modalVariants } from "@/data/animations/installationModalAnimations";
import { useBodyScrollLock } from "@/hooks/useInstallationNoteModalEffects";
import { downloadAllImagesAsZip, downloadSingleImage } from "@/helpers/downloadInstallationImages";

const InstallationNoteModal: React.FC = () => {
  const { isOpen, installation, title, text, images, closeModal } = useInstallationNoteModalStore();
  const { handleInstallationStatus } = useTrackingStore();
  const { isDark } = useThemeStore();

  useBodyScrollLock(isOpen);

  const handleFinishInstallation = () =>
    installation &&
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Instalación finalizada",
      textSuccess: "La instalación ha sido finalizada.",
      titleError: "Error al finalizar",
      textError: "No se pudo finalizar la instalación. Intenta nuevamente.",
      genericFunction: () => handleInstallationStatus(installation.id, "Finalizada"),
      closeModal,
    });

  const handleRejectInstallation = () =>
    installation &&
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Instalación rechazada",
      textSuccess: "La instalación ha sido rechazada correctamente.",
      titleError: "Error al rechazar",
      textError: "No se pudo rechazar la instalación. Intenta nuevamente.",
      genericFunction: () => handleInstallationStatus(installation.id, "Rechazada"),
      closeModal,
    });

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
            className={clsx(
              "bg-bgColor p-6 rounded-xl shadow-lg max-h-[600px] border-t-[10px] border-primaryColor flex flex-col justify-between overflow-y-auto w-full max-w-lg relative z-60 dark:bg-secondaryColor dark:shadow-bgColor/20",
              images.length > 0 && "h-[90%]"
            )}
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-[20px] font-bold text-primaryColor mb-4"
            >
              {title}:
            </motion.h2>

            <div
              className={clsx(
                "text-sm leading-relaxed overflow-y-auto",
                images.length > 0 && "min-h-[400px]"
              )}
            >
              <div dangerouslySetInnerHTML={{ __html: text || "" }} />

              {images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-lg shadow overflow-hidden group"
                    >
                      <Image
                        src={img}
                        alt={`Imagen ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <button
                        onClick={() => downloadSingleImage(img, i)}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-admin-activeColor/70 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md transition hover:bg-admin-activeColor/90"
                      >
                        Descargar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {installation?.id && installation.status === "A revisar" && (
                <>
                  <button
                    onClick={handleFinishInstallation}
                    className="w-full bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover"
                  >
                    Finalizar instalación
                  </button>

                  <button
                    onClick={handleRejectInstallation}
                    className="w-full bg-admin-inactiveColor text-white p-2 rounded-md transition-all duration-200 hover:bg-admin-inactiveColor/80"
                  >
                    Rechazar instalación
                  </button>
                </>
              )}

              {images.length > 1 && (
                <button
                  onClick={() => downloadAllImagesAsZip(images)}
                  className="w-full bg-admin-activeColor text-white p-2 rounded-md transition hover:bg-admin-activeColor/85"
                >
                  Descargar todas (.zip)
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
