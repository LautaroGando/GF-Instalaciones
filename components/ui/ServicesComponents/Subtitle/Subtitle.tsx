import React from "react";
import { ISubtitleProps } from "./types";

export const Subtitle: React.FC<ISubtitleProps> = ({
  label,
}: ISubtitleProps) => {
  return (
    <h2 className="text-primaryColor text-[22px] font-medium text-center sm:text-[26px]">
      {label}
    </h2>
  );
};

export default Subtitle;
