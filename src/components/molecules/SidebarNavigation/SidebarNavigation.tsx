import React from "react";
import { useLocation } from "react-router";
import { sidebarNavLinks } from "../../../constants/sidebar.const.ts";
import NavigationLink from "../../atoms/NavigationLink/NavigationLink.tsx";

const SidebarNavigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {sidebarNavLinks.map((link) => (
        <NavigationLink
          {...link}
          key={link.href}
          isActive={pathname === link.href}
        />
      ))}
    </>
  );
};

export default SidebarNavigation;
