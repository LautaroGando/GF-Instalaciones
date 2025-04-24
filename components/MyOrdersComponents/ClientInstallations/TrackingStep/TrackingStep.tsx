import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITrackingStepProps } from "./types";

import React from "react";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TrackingStep = ({ label, date }: ITrackingStepProps) => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faSquareCheck} className="w-8 h-9 text-admin-activeColor" />
      <div>
        <p>{label}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default TrackingStep;
