"use client";
import { headerLinks } from "@/data/HeaderLinks/header-links";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePath } from "@/hooks/usePath";
import type { IHeaderLink } from "@/data/HeaderLinks/types";
import SelectTheme from "@/components/ui/SelectTheme/SelectTheme";

export const HeaderLinks: React.FC = () => {
  const { pathname, hash } = usePath();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-7 items-center">
        <SelectTheme />
        {headerLinks.map((link: IHeaderLink, i: number) => {
          const isActive = link.href === `${pathname}${hash}`;

          return (
            <li key={i}>
              <Link
                className={clsx(
                  "font-textFont transition-all duration-500 xl:text-lg",
                  isActive
                    ? "text-primaryColor font-semibold"
                    : "text-secondaryColor dark:text-letterColorLight"
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
