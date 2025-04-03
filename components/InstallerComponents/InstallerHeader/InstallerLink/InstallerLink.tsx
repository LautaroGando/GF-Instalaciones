"use client";
import { headerLinksInstaller } from "@/data/HeaderLinks/header-links";
import { IHeaderLink } from "@/data/HeaderLinks/types";
import { useMenuInstallerStore } from "@/store/MenuInstallerStore/menuinstallerStore";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const InstallerLink: React.FC = () => {
  const pathname = usePathname();
  const { handleCloseMenu } = useMenuInstallerStore();

  return (
    <div className="flex flex-col gap-5 items-center">
      {headerLinksInstaller.map((link: IHeaderLink, i) => (
        <div
          key={i}
          className={clsx(
            "w-max text-letterColorLight text-lg relative border-b after:transition-all after:duration-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-bgColor after:-bottom-[1px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full",
            pathname === link.href ? "border-bgColor" : "border-transparent"
          )}
        >
          <Link onClick={handleCloseMenu} href={link.href}>
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InstallerLink;
