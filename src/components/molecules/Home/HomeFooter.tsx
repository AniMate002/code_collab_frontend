import React from "react";
import { HomeFooterLink, HomeFooterText, HomeFooterWrapper } from "./styles.ts";
import { RouterPaths } from "../../../router/paths.tsx";

const HomeFooter: React.FC = () => {
  return (
    <>
      <HomeFooterWrapper>
        <HomeFooterLink to={RouterPaths.HOME}>About</HomeFooterLink>
        <HomeFooterLink to={RouterPaths.HOME}>Contact</HomeFooterLink>
        <HomeFooterLink to={RouterPaths.HOME}>Terms of Service</HomeFooterLink>
        <HomeFooterLink to={RouterPaths.HOME}>Privacy Policy</HomeFooterLink>
      </HomeFooterWrapper>
      <HomeFooterText>
        @2025 CodeCollab. Kiryl Shauchenka. All rights reserved.
      </HomeFooterText>
    </>
  );
};

export default HomeFooter;
