"use client";
import BackButton from "@/components/ui/GeneralComponents/BackButton/BackButton";
import React, { useEffect } from "react";
import { useMenuInstallerStore } from "@/store/MenuInstallerStore/menuinstallerStore";
import clsx from "clsx";
import MenuInstaller from "@/components/ui/InstallerComponents/MenuInstaller/MenuInstaller";
import Logo from "@/components/ui/GeneralComponents/Logo/Logo";
import InstallerLink from "./InstallerLink/InstallerLink";
import InstallerLinkMenu from "./InstallerLinkMenu/InstallerLinkMenu";
import { useSize } from "@/hooks/useSize";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";
import useDisableScroll from "@/hooks/useDisableScroll";

export const InstallerHeader: React.FC = () => {
  const { menu, handleCloseMenu } = useMenuInstallerStore();
  const { size } = useSize();
  useDisableScroll(menu);

  useEffect(() => {
    if (size <= 768) {
      handleCloseMenu();
    }
  }, [size, handleCloseMenu]);

  return (
    <header className="w-full h-[80px] flex sticky top-0 transition-all duration-300 bg-bgColor items-center justify-between shadow-md shadow-secondaryColor/20 px-3 dark:bg-bgColorDark dark:shadow-bgColor/20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <Logo label="Instaladores" />
        <MenuInstaller />
        <div
          className={clsx(
            "fixed top-0 right-0 h-[100dvh] transition-all py-20 overflow-y-auto overflow-x-hidden z-40 duration-300 bg-bgColor flex flex-col justify-between dark:bg-secondaryColor",
            menu
              ? "w-full shadow-secondaryColor/20 dark:shadow-bgColor/20 sm:w-[400px] sm:shadow-xl"
              : "w-0"
          )}
        >
          <div className="flex flex-col gap-10">
            <InstallerLinkMenu />
            <BackButton />
          </div>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          <SelectTheme />
          <InstallerLink />
          <BackButton />
        </div>
      </div>
    </header>
  );
};

export default InstallerHeader;
