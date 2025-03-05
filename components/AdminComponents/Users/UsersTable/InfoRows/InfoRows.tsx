import clsx from "clsx";
import React from "react";
import { IInfoRowsProps } from "./types";

export const InfoRows: React.FC<IInfoRowsProps> = ({
  item,
  label,
}: IInfoRowsProps) => {
  return (
    <td
      className={clsx(
        "h-12",
        item.role.name === "Admin"
          ? "font-semibold"
          : item.role.name === "Instalador"
          ? "text-primaryColor"
          : item.role.name === "Coordinador"
          ? "text-primaryColor font-semibold"
          : "text-secondaryColor"
      )}
    >
      {label}
    </td>
  );
};

export default InfoRows;
