import { PageProps } from "@/.next/types/app/layout";
import React from "react";
import MenuInstaller from "../ui/InstallerComponents/MenuInstaller/MenuInstaller";
import Installation from "./Installation/Installation";
import SelectTheme from "../ui/GeneralComponents/SelectTheme/SelectTheme";

export const Installer = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      <SelectTheme />
      <MenuInstaller />
      {slug === "installations" && <Installation />}
    </div>
  );
};

export default Installer;
