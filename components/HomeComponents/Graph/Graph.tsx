import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import React from "react";
import PreviewJobs from "./PreviewJobs/PreviewJobs";
import InfoGraph from "./InfoGraph/InfoGraph";

export const Graph: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 -mt-[70px]">
      <HomeTitle text="¿Necesitas Instalar gráfica?" />
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <PreviewJobs />
        <InfoGraph />
      </div>
    </section>
  );
};

export default Graph;
