import TrackingTableHeaders from "@/utils/TrackingTableHeaders";
import React from "react";

export const TrackingTableHeader = () => {
  return (
    <thead>
      <tr className="sticky top-0 bg-bgColor border-b border-primaryColor">
        {TrackingTableHeaders.map((item, i) => (
          <th key={i} className="text-bgColorDark/80 px-4 h-12 whitespace-nowrap border-b border-primaryColor">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TrackingTableHeader;
