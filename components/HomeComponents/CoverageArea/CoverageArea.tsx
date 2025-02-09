import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import React from "react";
import GridImages from "./GridImages/GridImages";
import CoverageItems from "./CoverageItems/CoverageItems";

export const CoverageArea: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <HomeTitle text="Cobertura Nacional que Llega a Todo el País" />
      <div className="flex flex-col gap-4 md:flex-row-reverse md:items-center md:justify-between">
        <GridImages />
        <CoverageItems />
      </div>
    </section>
  );
};

export default CoverageArea;
