import React from "react";
import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";
import Template3 from "./Template3/Template3";

const ArticleTemplate: React.FC<{ template: string }> = ({ template }) => {
  if (!["1", "2", "3"].includes(template)) {
    return <div className="text-red-500 font-bold text-center mt-10">Plantilla no encontrada</div>;
  }

  return (
    <div>
      {template === "1" && <Template1 />}
      {template === "2" && <Template2 />}
      {template === "3" && <Template3 />}
    </div>
  );
};

export default ArticleTemplate;
