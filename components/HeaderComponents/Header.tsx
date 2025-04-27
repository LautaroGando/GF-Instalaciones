"use client";
import React, { useEffect } from "react";
import Logo from "./Logo/Logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import ResponsiveMenu from "./ReponsiveMenu/ResponsiveMenu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Header: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById("main-header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("scrolledHeader");
      } else {
        header.classList.remove("scrolledHeader");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={clsx(
        "w-full flex justify-center transition-all duration-300 items-center text-letterColorLight h-[80px] px-[12px] fixed top-0 z-50 sm:px-[20px]",
        pathname !== "/" &&
          "bg-bgColor text-secondaryColor dark:bg-secondaryColor dark:text-letterColorLight"
      )}
    >
      <div className="flex items-center w-full justify-between lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
        <Logo />
        <HeaderLinks />
        <ResponsiveMenu />
      </div>
    </header>
  );
};

export default Header;
