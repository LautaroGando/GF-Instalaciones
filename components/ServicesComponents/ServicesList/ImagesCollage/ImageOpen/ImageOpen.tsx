import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useServicesStore } from "@/store/ServicesStore/useServicesStore";
import { imagesCollageData } from "@/data/ServicesComponents/ImagesCollageData/images-collage-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ImageOpen: React.FC = () => {
  const { isOpenImage, closeImage, nextImage, prevImage } = useServicesStore();
  const image = imagesCollageData.find((img) => img.id === isOpenImage);

  return (
    <AnimatePresence>
      {isOpenImage !== null && image && (
        <motion.div
          key={isOpenImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImage}
          className="fixed z-50 top-0 left-0 flex items-center justify-center bg-secondaryColor/60 w-full h-full overflow-hidden"
        >
          <motion.div
            key={isOpenImage}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.3 }}
            className="w-[90%] h-auto max-h-[90%] p-5 flex flex-col gap-5 items-center justify-center bg-bgColor rounded-[9px] dark:bg-bgColorDark xl:w-[60%]"
          >
            <div className="w-full h-full rounded-[9px] overflow-auto">
              <Image
                className="w-full object-cover rounded-[8px] object-center"
                src={image.image}
                alt="Imagen de la instalación"
                priority
              />
            </div>
            <div className="flex justify-between gap-3 w-full">
              <button
                onClick={() => prevImage(image.id)}
                className="min-w-[40px] min-h-[40px] bg-primaryColor text-letterColorLight rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-primaryColorHover"
              >
                <FontAwesomeIcon
                  className="text-[25px] w-[25px]"
                  icon={faArrowLeft}
                  width={25}
                />
              </button>
              <button
                onClick={closeImage}
                className="w-full h-[40px] bg-primaryColor text-letterColorLight rounded-[4px] transition-all duration-300 hover:bg-primaryColorHover"
              >
                Cerrar
              </button>
              <button
                onClick={() => nextImage(image.id)}
                className="min-w-[40px] min-h-[40px] bg-primaryColor text-letterColorLight rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-primaryColorHover"
              >
                <FontAwesomeIcon
                  className="text-[25px] w-[25px]"
                  icon={faArrowRight}
                  width={25}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageOpen;
