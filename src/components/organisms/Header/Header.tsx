import React from "react";
import { HeaderWrapper } from "./styles.ts";
import Logo from "../../molecules/Logo/Logo.tsx";
import HeaderNavigation from "../../molecules/HeaderNaigation/HeaderNavigation.tsx";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderNavigation />
    </HeaderWrapper>
  );
};

export default Header;
