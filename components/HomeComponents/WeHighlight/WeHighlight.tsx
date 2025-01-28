import React from "react";
import highlightItems from "./highlightData";
import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import HighlightItem from "./HighlightItem/HighlightItem";

const WeHighlight = () => {
  return (
    <section>
      <HomeTitle text="Por qué destacamos" />
      <div className="flex flex-col gap-[20px] sm:flex-row sm:gap-[11px] md:gap-[30px]">
        {highlightItems.map((item, i) => (
          <HighlightItem key={i} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default WeHighlight;
