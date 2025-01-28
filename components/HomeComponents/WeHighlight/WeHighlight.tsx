import React from "react";
import highlightItems from "./highlightData";
import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import HighlightItem from "./HighlightItem/HighlightItem";

const WeHighlight = () => {
  return (
    <section>
      <HomeTitle text="Por qué destacamos" />
      <div className="flex flex-col gap-[20px]">
        {highlightItems.map((item, i) => (
          <HighlightItem key={i} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default WeHighlight;
