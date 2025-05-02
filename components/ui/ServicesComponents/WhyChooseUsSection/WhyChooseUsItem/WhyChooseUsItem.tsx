import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IWhyChooseUsItemProps } from "./types";

const WhyChooseUsItem: React.FC<IWhyChooseUsItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-4">
      <div className="py-1">
        <FontAwesomeIcon icon={icon} className="size-[32px]" />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 py-1">
          <div className="size-[15px] bg-white rounded-[100%]" />
          <div className="w-[1px] h-[25px] bg-white " />
        </div>
        <p className="text-[14px] leading-[1.30]">{text}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsItem;
