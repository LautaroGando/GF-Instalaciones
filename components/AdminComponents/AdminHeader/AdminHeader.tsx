import React from "react";
import Logo from "../../ui/AdminComponents/Logo/Logo";
import Path from "./Path/Path";
import ResponsiveMenuAdmin from "./ResponsiveMenuAdmin/ResponsiveMenuAdmin";
import ButtonMenuAdmin from "./ResponsiveMenuAdmin/ButtonMenuAdmin/ButtonMenuAdmin";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";
import Notifications from "../../ui/AdminComponents/Notifications/Notifications";
import AdminProfile from "@/components/ui/AdminComponents/AdminProfile/AdminProfile";
import ButtonOpenMenuAdmin from "@/components/ui/AdminComponents/ButtonOpenMenuAdmin/ButtonOpenMenuAdmin";

export const AdminHeader: React.FC = () => {
  return (
    <div className="bg-primaryColor p-3 flex flex-col gap-5 lg:pl-[142px] lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50">
      <div className="w-full h-16 flex justify-between items-center fixed top-0 left-0 px-3 bg-primaryColor z-50 lg:z-40">
        <ButtonMenuAdmin />
        <div className="hidden">
          <SelectTheme />
        </div>
      </div>
      <ResponsiveMenuAdmin />
      <div className="relative">
        <Logo />
        <div className="gap-5 items-center hidden relative lg:flex lg:absolute lg:top-0 lg:right-0 lg:z-50">
          <Notifications />
          <ButtonOpenMenuAdmin />
          <AdminProfile
            containerClasses="lg:flex-row"
            imgClasses="lg:rounded-none lg:w-[50px] lg:h-[50px]"
            nameClasses="lg:ml-0 lg:text-letterColorLight lg:text-xs lg:w-full"
            viewAdmin
          />
        </div>
      </div>
      <Path />
    </div>
  );
};

export default AdminHeader;
