"use client";
import { headerLinks } from "@/data/HeaderLinks/header-links";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePath } from "@/hooks/usePath";
import type { IHeaderLink } from "@/data/HeaderLinks/types";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";
import { useUserStore } from "@/store/UserStore/userStore";
import UserProfile from "./UserProfile/UserProfile";

export const HeaderLinks: React.FC = () => {
  const { pathname, hash } = usePath();
  const { user } = useUserStore();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-7 items-center">
        <SelectTheme />
        {headerLinks.map((link: IHeaderLink, i: number) => {
          const isActive = link.href === `${pathname}${hash}`;

          return (
            <li key={i}>
              {user && link.label !== "Ingresar" ? (
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
              ) : (
                !user && (
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
                )
              )}
            </li>
          );
        })}
        {user && <UserProfile />}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
