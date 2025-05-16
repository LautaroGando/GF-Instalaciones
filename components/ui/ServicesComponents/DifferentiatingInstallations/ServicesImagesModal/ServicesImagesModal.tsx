"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useCallback } from "react";
import { IServicesImagesModalProps } from "./types";

const ServicesImagesModal: React.FC<IServicesImagesModalProps> = ({
  selectedImage,
  setSelectedImage,
}) => {
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    },
    [setSelectedImage]
  );

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleKeyDown]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl bg-black"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white text-3xl font-bold hover:text-white/70 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.button>

            <div className="overflow-auto max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Imagen ampliada"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesImagesModal;
