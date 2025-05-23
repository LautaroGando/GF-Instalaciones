import { headerLinksInstaller } from "@/data/HeaderLinks/header-links";
import { IHeaderLink } from "@/data/HeaderLinks/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const InstallerLink: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex">
      {headerLinksInstaller.map((link: IHeaderLink, i) => (
        <Link
          key={i}
          href={link.href}
          className={clsx(
            "flex items-center justify-center text-primaryColor border-b-2 text-lg w-[170px] h-[80px] transition-all duration-300 hover:border-primaryColor",
            pathname === link.href
              ? "border-primaryColor bg-primaryColor/15 font-semibold"
              : "border-transparent hover:bg-primaryColor/5"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default InstallerLink;
