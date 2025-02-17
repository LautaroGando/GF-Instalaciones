import React from "react";

const TitleBlog: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className="text-[22px] text-primaryColor font-bold mt-[30px] mb-[20px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:mt-[40px] xl:text-[44px]">
      {text}
    </h2>
  );
};

export default TitleBlog;
