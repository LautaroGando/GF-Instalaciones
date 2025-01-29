import React from "react";
import Logo from "./Logo/Logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import ResponsiveMenu from "./ReponsiveMenu/ResponsiveMenu";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center items-center h-[60px] px-[12px] sm:px-[20px] sm:h-[70px] lg:h-[80px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
      <div className="flex items-center w-full justify-between">
        <Logo />
        <HeaderLinks />
        <ResponsiveMenu />
      </div>
    </header>
  );
};

export default Header;
