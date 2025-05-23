import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import { IDashboardHeaderProps } from "./types";

export const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ slug }) => {
  return (
    <div className="w-full fixed left-0 top-0 z-40 h-[250px] bg-primaryColor text-letterColorLight p-3 flex justify-between items-end sm:h-[180px]">
      <div className="w-full mx-auto flex gap-10 flex-col sm:flex-row sm:justify-between sm:items-end lg:max-w-[960px] xl:max-w-[1200px]">
        <UserInfo />
        <Navigation pathname={slug} />
      </div>
    </div>
  );
};

export default DashboardHeader;
