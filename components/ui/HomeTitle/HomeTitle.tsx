import React from "react";
import IHomeTitleProps from "./types";

const HomeTitle: React.FC<IHomeTitleProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-5 w-full">
      <span className="block w-[200px] h-[1px] bg-primaryColor sm:w-[350px] lg:w-[450px] xl:w-[600px]"></span>
      <h2 className="font-playfairDisplay font-bold text-primaryColor text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[36px]">
        {text}
      </h2>
    </div>
  );
};

export default HomeTitle;
