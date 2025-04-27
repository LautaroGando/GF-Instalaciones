"use client";
import { successStoriesData } from "@/data/HomeComponents/SuccessStoriesData/success-stories-data";
import { ISuccessStoriesData } from "@/data/HomeComponents/SuccessStoriesData/types";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "motion/react";

export const SuccessStories: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 w-full justify-between p-3 mt-20 md:flex-row"
    >
      {successStoriesData.map((data: ISuccessStoriesData, i: number) => (
        <motion.div key={i} className="flex flex-col items-center gap-2">
          {isVisible && (
            <>
              <div className="flex items-end">
                <div className="flex items-center">
                  <span className="text-primaryColor font-semibold block text-4xl">
                    {i === 1 && "+"}
                  </span>
                  <CountUp
                    end={data.data}
                    delay={0.3}
                    duration={3}
                    className="text-6xl text-primaryColor font-bold"
                  />
                </div>
                <span className="text-primaryColor font-semibold text-4xl">
                  {i === 3 && "%"}
                </span>
              </div>
              <h4 className="text-lg font-medium text-center max-w-[170px]">
                {data.label}
              </h4>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SuccessStories;
