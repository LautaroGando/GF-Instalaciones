import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import useDisableScroll from "@/hooks/useDisableScroll";

export const ModalFinalizedInstallation: React.FC = () => {
  const { isOpen, images, closeModal, installation } =
    useInstallationNoteModalStore();
  const { handleInstallationStatus } = useTrackingStore();
  const { isDark } = useThemeStore();
  useDisableScroll(isOpen);

  const handleFinishInstallation = () =>
    installation &&
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Instalación finalizada",
      textSuccess: "La instalación ha sido finalizada.",
      titleError: "Error al finalizar",
      textError: "No se pudo finalizar la instalación. Intenta nuevamente.",
      genericFunction: () =>
        handleInstallationStatus(installation.id, "Finalizada"),
      closeModal: () => closeModal(),
    });

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={installation?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full h-[100vh] bg-bgColorDark/60 left-0 top-0"
        >
          <div className="py-3 px-5 bg-bgColor fixed h-[90%] overflow-y-scroll max-h-[600px] top-1/2 left-1/2 -translate-x-1/2 justify-between shadow-md shadow-bgColorDark/10 -translate-y-1/2 flex flex-col gap-10 transition-all duration-300 w-[330px] border-t-[10px] border-primaryColor rounded-[8px] dark:bg-secondaryColor dark:shadow-bgColor/10 sm:w-[600px]">
            <h2 className="text-primaryColor text-sm text-center font-medium sm:text-lg">
              IMAGENES DE LA INSTALACIÓN
            </h2>
            <div className="text-sm leading-relaxed min-h-[400px] overflow-y-auto">
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
              <button
                onClick={() => handleFinishInstallation()}
                className="mt-6 w-full bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover"
              >
                Finalizar instalación
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white rounded-md py-2 transition hover:bg-gray-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalFinalizedInstallation;
