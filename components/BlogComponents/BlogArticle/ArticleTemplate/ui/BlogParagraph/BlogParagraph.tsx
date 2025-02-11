import React from "react";

const BlogParagraph: React.FC<{ text: string }> = ({text}) => {
  return (
    <p className="pb-[20px]">
      {text}
    </p>
  );
};

export default BlogParagraph;
