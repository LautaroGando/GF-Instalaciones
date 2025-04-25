import React from "react";
import HighlightItem from "./HighlightItem/HighlightItem";
import highlightItems from "@/data/HighlightData/highlight-data";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";

const WeHighlight = () => {
  return (
    <section className="flex flex-col gap-10">
      <HomeTitle text="¿Por qué elegir GF Instalaciones?" />
      <div className="flex flex-col gap-[20px] sm:flex-row sm:gap-[11px] md:gap-[30px] lg:gap-[15px]">
        {highlightItems.map((item, i) => (
          <HighlightItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WeHighlight;
