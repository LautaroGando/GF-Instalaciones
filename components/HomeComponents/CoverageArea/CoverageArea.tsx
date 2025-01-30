import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import React from "react";
import GridImages from "./GridImages/GridImages";
import CoverageItems from "./CoverageItems/CoverageItems";

export const CoverageArea: React.FC = () => {
  return (
    <div>
      <HomeTitle text="Cobertura Nacional que Llega a Todo el País" />
      <div className="flex flex-col gap-4">
        <GridImages />
        <CoverageItems />
      </div>
    </div>
  );
};

export default CoverageArea;
