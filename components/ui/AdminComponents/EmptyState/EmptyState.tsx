import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IEmptyStateProps from "./types";

const EmptyState: React.FC<IEmptyStateProps> = ({
  icon,
  title,
  text = "Intenta con otro filtro o revisa más tarde.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] text-center text-gray-600">
      <FontAwesomeIcon icon={icon} className="text-6xl max-w-[75px] text-gray-400 mb-4" />
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
};

export default EmptyState;
