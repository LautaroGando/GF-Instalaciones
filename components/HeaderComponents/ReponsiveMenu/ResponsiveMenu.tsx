"use client";
import { useMenuStore } from "@/store/MenuStore/menuStore";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import clsx from "clsx";
import { headerLinks } from "@/data/HeaderLinks/header-links";
import { IHeaderLink } from "@/data/HeaderLinks/types";
import Link from "next/link";
import { usePath } from "@/hooks/usePath";
import { useSize } from "@/hooks/useSize";
import { useEffect, useRef } from "react";
import SelectTheme from "@/components/ui/GeneralComponents/SelectTheme/SelectTheme";
import { useUserStore } from "@/store/UserStore/userStore";
import ButtonProfile from "@/components/ui/GeneralComponents/ButtonProfile/ButtonProfile";
import ButtonInstaller from "@/components/ui/GeneralComponents/ButtonInstaller/ButtonInstaller";
import ButtonLogout from "@/components/ui/GeneralComponents/ButtonLogout/ButtonLogout";

export const ResponsiveMenu: React.FC = () => {
  const { user } = useUserStore();
  const { menu, handleCloseMenu } = useMenuStore();
  const { pathname, hash } = usePath();
  const { size } = useSize();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (size >= 1024 && menu) {
      handleCloseMenu();
    }
  }, [size, menu, handleCloseMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-ignore-outside-click]")) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        handleCloseMenu();
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu, handleCloseMenu]);

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <div className="lg:hidden">
      <ButtonMenu data-ignore-outside-click />
      {menu && (
        <div
          className={clsx(
            "fixed top-0 left-0 transition-all w-full duration-500 h-full bg-secondaryColor/80 backdrop-blur-sm z-10",
            menu ? "opacity-100" : "opacity-0"
          )}
        ></div>
      )}
      <div
        ref={menuRef}
        className={clsx(
          "fixed h-full transition-all duration-500 top-0 right-0 overflow-hidden bg-bgColor z-10 dark:bg-secondaryColor",
          menu ? "w-full sm:w-[400px]" : "w-0 sm:w-0"
        )}
      >
        <ul className="flex flex-col gap-7 items-center mt-20 sm:mt-[90px]">
          <SelectTheme />
          {headerLinks.map((link: IHeaderLink, i: number) => {
            const isActive = link.href === `${pathname}${hash}`;
            if (user && link.label === "Ingresar") return null;

            return (
              <li key={i}>
                <Link
                  onClick={handleCloseMenu}
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
          {userInfo && (
            <>
              <div className="w-full max-w-[330px] mx-auto h-[2px] bg-primaryColor"></div>
              <ButtonProfile classes="lg:w-full lg:h-full lg:text-center lg:transition-all lg:p-3 lg:hover:bg-primaryColor lg:hover:text-letterColorLight lg:hover:border-none" />
              {userInfo?.userRoles[0].role.name === "Instalador" && (
                <ButtonInstaller classes="lg:w-full lg:h-full lg:text-center lg:transition-all lg:p-3 lg:hover:bg-primaryColor lg:hover:text-letterColorLight lg:hover:border-none" />
              )}
              <ButtonLogout classes="lg:w-full lg:h-full lg:text-center lg:transition-all lg:p-3 lg:hover:bg-redColor lg:hover:text-letterColorLight lg:hover:border-none" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
