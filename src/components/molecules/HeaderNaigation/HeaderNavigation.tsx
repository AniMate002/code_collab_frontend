import React from "react";
import { HeaderNavigationWrapper } from "./styles.ts";
import IsAuthHeader from "../IsAuthHeader/IsAuthHeader.tsx";
import HeaderSearchInput from "../HeaderSearchInput/HeaderSearchInput.tsx";

const HeaderNavigation: React.FC = () => {
  return (
    <HeaderNavigationWrapper>
      <HeaderSearchInput />
      <IsAuthHeader />
    </HeaderNavigationWrapper>
  );
};

export default HeaderNavigation;
