import React from "react";
import PreviewJobs from "./PreviewJobs/PreviewJobs";
import InfoGraph from "./InfoGraph/InfoGraph";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";

export const Graph: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 -mt-[70px]">
      <HomeTitle text="¿Necesitas instalar gráfica?" />
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <PreviewJobs />
        <InfoGraph />
      </div>
    </section>
  );
};

export default Graph;
