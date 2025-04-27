import React from "react";
import { IInstallationsCardHeaderProps } from "./types";

const InstallationsCardHeader: React.FC<IInstallationsCardHeaderProps> = ({
  installation,
  styles,
}) => {
  return (
    <div className="flex flex-col mb-3 sm:flex-row sm:justify-between sm:items-center sm:mb-6">
      <div className="order-2 flex items-center sm:order-1">
        <div className="h-[68px] mt-4 sm:mt-0 sm:h-max">
          <p className="text-xs text-gray-500">ID: {installation.id}</p>
          <p className="text-secondaryColor/60 font-medium my-1">
            {installation.address.street} {installation.address.number},{" "}
            {installation.address.city.name}, {installation.address.city.province.name},{" "}
            {installation.address.postalCode}
          </p>
        </div>
      </div>

      <div className="order-1 flex items-center gap-[6px]">
        <div className="size-[14px] rounded-full" style={{ backgroundColor: styles.bg }} />
        <p className="font-semibold" style={{ color: styles.text }}>
          {installation.status}
        </p>
      </div>
    </div>
  );
};

export default InstallationsCardHeader;
