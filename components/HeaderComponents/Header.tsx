import React from "react";
import Logo from "./Logo/Logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import ResponsiveMenu from "./ReponsiveMenu/ResponsiveMenu";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center transition-all duration-500 items-center h-[60px] px-[12px] sticky top-0 z-50 bg-bgColor dark:bg-secondaryColor sm:px-[20px] sm:h-[70px] lg:h-[80px]">
      <div className="flex items-center w-full justify-between lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
        <Logo />
        <HeaderLinks />
        <ResponsiveMenu />
      </div>
    </header>
  );
};

export default Header;
