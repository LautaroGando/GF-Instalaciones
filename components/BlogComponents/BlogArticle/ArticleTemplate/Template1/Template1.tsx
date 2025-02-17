import React from "react";
import { articleParagraphs } from "@/data/TemplatesData/Template1Data";
import BlogSocialIcons from "@/components/ui/BlogComponents/BlogSocialIcons/BlogSocialIcons";
import BlogParagraph from "@/components/ui/BlogComponents/BlogParagraph/BlogParagraph";

const Template1 = () => {
  return (
    <div className="py-[40px] max-w-[730px] mx-auto">
      <div className="flex gap-[15px] pb-[20px] text-[14px] text-primaryColor">
        <p className="bg-primaryColor/20 font-semibold py-[2px] px-3 rounded-[50px]">Categoria 1</p>
        <p className="font-semibold">Feb 10, 2025</p>
      </div>

      <h2 className="text-[20px] text-primaryColor font-bold sm:text-[30px] sm:mb-[15px] xl:text-[46px]">
        25 formas ideales para ganar dinero por Internet en 2025
      </h2>
      <BlogSocialIcons isMobile={true}/>
      <div className="text-[14px] sm:text-[16px]">
      {articleParagraphs.map((text, index) => (
        <BlogParagraph key={index} text={text} />
      ))}
    </div>
    </div>
  );
};

export default Template1;
