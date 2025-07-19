import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "@mui/icons-material/Person";
import { RouterPaths } from "../router/paths.tsx";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
  {
    href: RouterPaths.EXPLORE,
    label: "Explore",
    Icon: ExploreIcon,
  },
  {
    href: RouterPaths.FOLLOWING,
    label: "Following",
    Icon: PeopleIcon,
  },
  {
    href: RouterPaths.MY_ROOMS,
    label: "My Rooms",
    Icon: TagIcon,
  },
  {
    href: RouterPaths.NOTIFICATIONS,
    label: "Notifications",
    Icon: NotificationsIcon,
  },
];
