import React from "react";
import { HeaderNavigationWrapper } from "./styles.ts";
import IsNotAuthHeader from "../IsNotAuthHeader/IsNotAuthHeader.tsx";
import HeaderSearchInput from "../HeaderSearchInput/HeaderSearchInput.tsx";

const HeaderNavigation: React.FC = () => {
  return (
    <HeaderNavigationWrapper>
      <HeaderSearchInput />
      <IsNotAuthHeader />
    </HeaderNavigationWrapper>
  );
};

export default HeaderNavigation;
