import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import { IDashboardHeaderProps } from "./types";

export const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ slug }) => {
  return (
    <div className="w-full h-[152px] bg-primaryColor text-letterColorLight p-3 flex flex-col justify-between lg:h-[96px] lg:flex-row lg:items-end">
      <UserInfo />
      <Navigation pathname={slug} />
    </div>
  );
};

export default DashboardHeader;
