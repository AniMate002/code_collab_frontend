import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "@mui/icons-material/Person";
import { RouterPaths } from "../router/paths.tsx";

export interface SidebarNavLink {
  href: string;
  label: string;
  Icon: React.ElementType;
  isActive?: boolean;
}

export const sidebarNavLinks: SidebarNavLink[] = [
  {
    href: RouterPaths.PROFILE("me"),
    label: "Profile",
    Icon: Profile,
  },
  {
    href: RouterPaths.HOME,
    label: "Home",
    Icon: HomeIcon,
  },
];
