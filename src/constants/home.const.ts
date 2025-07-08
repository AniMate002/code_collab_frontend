import type { HomeMainAdvantage } from "../types/home.types.ts";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CodeIcon from "@mui/icons-material/Code";
import ChatIcon from "@mui/icons-material/Chat";

export const HomeMainAdvantages: Array<HomeMainAdvantage> = [
  {
    Icon: PeopleOutlineIcon,
    title: "Connect with Developers",
    description:
      "Find and connect with developers from around the world who share your interests and passions.",
  },
  {
    Icon: CodeIcon,
    title: "Collaborate on Projects",
    description:
      "Work together on projects, share code, and get feedback from other developers.",
  },
  {
    Icon: ChatIcon,
    title: "Build Amazing Things",
    description:
      "Build amazing things together, from small projects to large-scale applications.",
  },
];
