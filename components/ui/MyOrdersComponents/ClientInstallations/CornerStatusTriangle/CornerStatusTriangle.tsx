import { IStatusStyle } from "@/interfaces/IStatusStyle";
import React from "react";

const CornerStatusTriangle: React.FC<{ styles: IStatusStyle }> = ({ styles }) => {
  return (
    <div
      className="absolute bottom-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"
      style={{ borderRightColor: styles.border }}
    />
  );
};

export default CornerStatusTriangle;
