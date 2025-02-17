import React from "react";
import Logo from "./Logo/Logo";
import Path from "./Path/Path";
import ResponsiveMenuAdmin from "./ResponsiveMenuAdmin/ResponsiveMenuAdmin";
import ButtonMenuAdmin from "./ResponsiveMenuAdmin/ButtonMenuAdmin/ButtonMenuAdmin";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";

export const AdminHeader: React.FC = () => {
  return (
    <div className="bg-primaryColor p-3 flex flex-col gap-5">
      <div className="w-full h-16 flex justify-between items-center fixed top-0 left-0 px-3 bg-primaryColor z-50">
        <ButtonMenuAdmin />
        <SelectTheme />
      </div>
      <ResponsiveMenuAdmin />
      <Logo />
      <Path />
    </div>
  );
};

export default AdminHeader;
