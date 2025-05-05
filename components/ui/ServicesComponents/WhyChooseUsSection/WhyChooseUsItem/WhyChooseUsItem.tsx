import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clsx from "clsx";
import { IWhyChooseUsItemProps } from "./types";

const WhyChooseUsItem: React.FC<IWhyChooseUsItemProps> = ({ icon, text, align = "left" }) => {
  return (
    <div className={clsx(
      "flex gap-4 max-w-[400px] sm:gap-6",
      align === "right" ? "lg:ml-auto" : "lg:mr-auto"
    )}>
      <div className="py-1">
        <FontAwesomeIcon icon={icon} className="size-[32px] sm:size-[40px]" />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 py-1">
          <div className="size-[15px] bg-white rounded-[100%]" />
          <div className="w-[1px] h-[25px] bg-white" />
        </div>
        <p className="text-[14px] leading-[1.30] sm:text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsItem;
