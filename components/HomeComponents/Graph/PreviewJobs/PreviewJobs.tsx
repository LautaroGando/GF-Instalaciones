"use client";
import { previewJobs } from "@/data/PreviewJobs/preview-jobs";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const PreviewJobs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % previewJobs.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleJob = (i: number) => setCurrentIndex(i);

  return (
    <div className="w-full max-w-[390px] mx-auto h-60 border-b-[6px] border-primaryColor rounded-tl-[50px] rounded-br-[50px] overflow-hidden relative sm:max-w-[480px] sm:h-72 lg:flex-1 lg:h-[360px] xl:min-w-[50%] xl:h-[396px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={previewJobs[currentIndex].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={previewJobs[currentIndex].image}
              alt={previewJobs[currentIndex].title}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full h-full absolute top-0 left-0 bg-secondaryColor/60 flex items-end">
        <div className="text-letterColorLight pb-2 flex flex-col gap-2 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={previewJobs[currentIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pl-2"
            >
              <h2 className="font-medium sm:text-lg lg:text-xl xl:text-2xl">
                {previewJobs[currentIndex].title}
              </h2>
              <p className="text-[10px] w-[85%] font-light border-l border-primaryColor pl-2 sm:text-xs lg:text-sm xl:text-base lg:w-[65%]">
                {previewJobs[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 justify-center">
            {previewJobs.map((_, i: number) => (
              <button
                key={i}
                onClick={() => handleJob(i)}
                className={clsx(
                  "w-[12px] h-[12px] bg-bgColor rounded-full transition-all ease-in-out duration-300 relative after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:w-[8px] after:h-[8px] after:rounded-full after:left-[50%] after:top-[50%] after:border-[2px] after:-translate-x-[50%] after:-translate-y-[50%]",
                  i === currentIndex
                    ? "after:border-secondaryColor"
                    : "after:border-bgColor"
                )}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewJobs;
