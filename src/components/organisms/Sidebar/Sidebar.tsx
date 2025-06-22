import React from "react";
import { SidebarWrapper } from "./styles.ts";

import SidebarNavigation from "../../molecules/SidebarNavigation/SidebarNavigation.tsx";
import SidebarBottom from "../../molecules/SidebarBottom/SidebarBottom.tsx";

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarNavigation />
      <SidebarBottom />
    </SidebarWrapper>
  );
};

export default Sidebar;
