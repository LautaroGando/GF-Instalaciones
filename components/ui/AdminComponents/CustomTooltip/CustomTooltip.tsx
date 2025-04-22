import React from "react";
import { TooltipProps } from "recharts";

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="p-2 shadow-md bg-bgColor rounded-sm dark:bg-bgColorDark dark:shadow-bgColor/20">
      <p>
        {payload[0].payload.name}{" "}
        <span className="font-semibold text-primaryColor">
          {payload[0].value}
        </span>
      </p>
    </div>
  );
};

export default CustomTooltip;
