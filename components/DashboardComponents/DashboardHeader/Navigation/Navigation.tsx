"use client";
import { navigationData } from "@/data/DashboardComponents/NavigationData/NavigationData";
import { INavigationData } from "@/data/DashboardComponents/NavigationData/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { INavigationProps } from "./types";
import ButtonLogout from "@/components/ui/DashboardComponents/ButtonLogout/ButtonLogout";
import { useUserStore } from "@/store/UserStore/userStore";

export const Navigation: React.FC<INavigationProps> = ({ pathname }) => {
  const { user } = useUserStore();

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <div className="flex gap-2 flex-row-reverse items-center relative">
      <ButtonLogout />
      {navigationData.map((link: INavigationData, i: number) => {
        const modifyPath = link.href.split("/")[2];

        if (
          userInfo?.userRoles[userInfo.userRoles.length - 1].role.name ===
            "Instalador" &&
          link.label === "Newslatter"
        )
          return;

        return (
          <Link
            key={i}
            className={clsx(
              "flex items-center gap-2 transition-all duration-300 p-1 rounded-[20px]",
              pathname === modifyPath
                ? "border-[5px] border-bgColor w-[150px] relative top-8 bg-primaryColor"
                : "w-[30px]"
            )}
            href={link.href}
            title={link.label}
          >
            <FontAwesomeIcon icon={link.icon} size="xl" />
            <h3
              className={clsx(
                "font-light text-sm transition-all duration-300",
                pathname === modifyPath ? "visible" : "hidden"
              )}
            >
              {link.label}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
