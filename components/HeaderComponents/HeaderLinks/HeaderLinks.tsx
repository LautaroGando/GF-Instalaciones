"use client";
import { IHeaderLink } from "@/data/IHeaderLink/types.d.ts";
import { headerLinks } from "@/data/HeaderLinks/header-links";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePath } from "@/hooks/usePath";

export const HeaderLinks: React.FC = () => {
  const { pathname, hash } = usePath();

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
                  isActive ? "text-primaryColor font-semibold" : "text-secondaryColor"
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
