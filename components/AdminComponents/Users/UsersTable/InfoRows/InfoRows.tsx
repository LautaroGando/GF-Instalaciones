import clsx from "clsx";
import React from "react";
import { IInfoRowsProps } from "./types";

export const InfoRows: React.FC<IInfoRowsProps> = ({ item, label }) => {
  const lastRole = item.userRoles[item.userRoles.length - 1]?.role.name;

  const className = clsx(
    lastRole === "Admin"
      ? "font-semibold"
      : lastRole === "Instalador"
      ? "text-primaryColor"
      : lastRole === "Coordinador" && "text-primaryColor font-semibold"
  );

  return <span className={className}>{label}</span>;
};

export default InfoRows;
