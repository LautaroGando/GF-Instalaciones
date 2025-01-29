import React from "react";
import Logo from "./Logo/Logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";

export const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <HeaderLinks />
    </header>
  );
};

export default Header;
