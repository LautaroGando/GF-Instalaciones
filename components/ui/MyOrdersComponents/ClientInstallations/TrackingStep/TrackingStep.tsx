import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITrackingStepProps } from "./types";

import React from "react";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TrackingStep = ({ statusName, date, visualState }: ITrackingStepProps) => {
  const iconClass = {
    done: "text-admin-activeColor",
    half: "text-admin-activeColor",
    pending: "text-gray-400",
    inactive: "text-gray-300",
  };

  return (
    <div className="sm:flex">
      <div className="flex items-center gap-4 sm:flex-col sm:text-center sm:w-[100px]">
        <FontAwesomeIcon
          icon={faSquareCheck}
          className={`w-8 sm:w-9 h-9 sm:h-10 ${iconClass[visualState]}`}
        />
        <div>
          <p className="text-[14px] md:text-[16px]">{statusName}</p>
          <p className="text-[12px] md:text-[14px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingStep;
