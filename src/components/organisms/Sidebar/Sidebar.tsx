import React from "react";
import { SidebarWrapper } from "./styles.ts";
import NavigationLink from "../../atoms/NavigationLink/NavigationLink.tsx";
import { sidebarNavLinks } from "../../../constants/sidebar.const.ts";
import { useLocation } from "react-router";
import Button from "../../atoms/Button/Button.tsx";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <SidebarWrapper>
      {sidebarNavLinks.map((link) => (
        <NavigationLink
          {...link}
          key={link.href}
          isActive={pathname === link.href}
        />
      ))}

      <Button sx={{ marginTop: "auto" }}>Create Room</Button>
    </SidebarWrapper>
  );
};

export default Sidebar;
