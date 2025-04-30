"use client";
import Logo from "@/components/ui/GeneralComponents/Logo/Logo";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";
import { headerLinksInstaller } from "@/data/HeaderLinks/header-links";
import { IHeaderLink } from "@/data/HeaderLinks/types";
import { useMenuInstallerStore } from "@/store/MenuInstallerStore/menuinstallerStore";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const InstallerLinkMenu: React.FC = () => {
  const pathname = usePathname();
  const { handleCloseMenu } = useMenuInstallerStore();

  return (
    <div className="flex flex-col gap-10 items-center">
      <Logo label="Instaladores" />
      <SelectTheme />
      <div className="flex flex-col items-center w-full">
        {headerLinksInstaller.map((link: IHeaderLink, i) => (
          <Link
            key={i}
            onClick={handleCloseMenu}
            href={link.href}
            className={clsx(
              "w-full flex items-center justify-center text-primaryColor border-l-2 text-lg relative h-[50px] transition-all duration-300 hover:border-primaryColor",
              pathname === link.href
                ? "border-primaryColor bg-primaryColor/15 font-semibold"
                : "border-transparent hover:bg-primaryColor/5"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstallerLinkMenu;
