import React from "react";
import IHomeTitleProps from "./types";
import clsx from "clsx";

const HomeTitle: React.FC<IHomeTitleProps> = ({ text, justLine = false }) => {
  return (
    <div className={clsx("flex flex-col items-center justify-center mt-20 mb-5 w-full", justLine && 'mt-0')}>
      <span className="block w-[200px] h-[1px] bg-primaryColor sm:w-[350px] lg:w-[450px] xl:w-[600px]"></span>
      <h2
        className={clsx(
          "font-titleFont font-bold text-primaryColor text-center text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[36px]",
          { hidden: justLine }
        )}
      >
        {text}
      </h2>
    </div>
  );
};

export default HomeTitle;
