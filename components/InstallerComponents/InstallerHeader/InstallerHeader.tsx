"use client";
import Logo from "@/components/ui/GeneralComponents/Logo/Logo";
import BackButton from "@/components/ui/InstallerComponents/BackButton/BackButton";
import React from "react";
import InstallerLink from "./InstallerLink/InstallerLink";
import { useMenuInstallerStore } from "@/store/MenuInstallerStore/menuinstallerStore";
import clsx from "clsx";

export const InstallerHeader: React.FC = () => {
  const { menu } = useMenuInstallerStore();

  return (
    <header
      className={clsx(
        "fixed w-full top-0 left-0 transition-all duration-300 overflow-hidden bg-primaryColor flex flex-col justify-between lg:min-w-[307px] lg:max-w-[307px] lg:static xl:max-w-[465px]",
        menu ? "h-[100dvh]" : "h-[0dvh] lg:h-[100dvh]"
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="w-full border-b-[5px] border-bgColor flex items-center py-10">
          <Logo label="Instaladores" />
        </div>
        <InstallerLink />
      </div>
      <BackButton />
    </header>
  );
};

export default InstallerHeader;
