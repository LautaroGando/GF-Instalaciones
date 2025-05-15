import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IServicesImagesModalProps } from "./types";

const ServicesImagesModal: React.FC<IServicesImagesModalProps> = ({
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-white/80"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesImagesModal;
