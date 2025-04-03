import React from "react";
import Logo from "../../ui/GeneralComponents/Logo/Logo";
import Path from "./Path/Path";
import ResponsiveMenuAdmin from "./ResponsiveMenuAdmin/ResponsiveMenuAdmin";
import ButtonMenuAdmin from "./ResponsiveMenuAdmin/ButtonMenuAdmin/ButtonMenuAdmin";
import Notifications from "../../ui/AdminComponents/Notifications/Notifications";
import AdminProfile from "@/components/ui/AdminComponents/AdminProfile/AdminProfile";
import ButtonOpenMenu from "@/components/ui/GeneralComponents/ButtonOpenMenu/ButtonOpenMenu";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";

export const AdminHeader: React.FC = () => {
  return (
    <header className="bg-primaryColor p-3 flex min-h-[250px] flex-col gap-5 lg:pl-[142px]">
      <div className="w-full h-16 flex justify-between items-center fixed top-0 left-0 px-3 bg-primaryColor z-50 lg:z-40">
        <ButtonMenuAdmin />
      </div>
      <ResponsiveMenuAdmin />
      <div className="relative">
        <Logo label="Admin" />
        <div className="gap-5 items-center hidden relative lg:flex lg:fixed lg:top-[6px] lg:right-3 lg:z-50">
          <div className="items-center hidden lg:flex">
            <SelectTheme admin />
          </div>
          <Notifications />
          <ButtonOpenMenu theme="light" />
          <AdminProfile
            containerClasses="lg:flex-row"
            imgClasses="lg:rounded-none lg:w-[50px] lg:h-[50px]"
            nameClasses="lg:ml-0 lg:text-letterColorLight lg:text-xs lg:w-full"
            viewAdmin
          />
        </div>
      </div>
      <Path />
    </header>
  );
};

export default AdminHeader;
