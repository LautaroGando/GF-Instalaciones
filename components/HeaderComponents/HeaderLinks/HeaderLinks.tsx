"use client";
import { IHeaderLink } from "@/interfaces/IHeaderLink";
import { headerLinks } from "@/utils/header-links";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { useHash } from "@/hooks/useHash";

export const HeaderLinks: React.FC = () => {
  const { pathname, hash } = useHash();

  return (
    <nav className="hidden xl:block">
      <ul className="flex gap-7">
        {headerLinks.map((link: IHeaderLink, i: number) => {
          const isActive = link.href === pathname + hash;

          return (
            <li key={i}>
              <Link
                className={clsx(
                  "font-textFont xl:text-lg",
                  isActive
                    ? "text-primaryColor font-semibold"
                    : "text-secondaryColor"
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
