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
        "h-12 px-4",
        item.userRoles[0].role.name === "Admin"
          ? "font-semibold"
          : item.userRoles[0].role.name === "Instalador"
          ? "text-primaryColor"
          : item.userRoles[0].role.name === "Coordinador"
          ? "text-primaryColor font-semibold"
          : "text-secondaryColor"
      )}
    >
      {label}
    </td>
  );
};

export default InfoRows;
