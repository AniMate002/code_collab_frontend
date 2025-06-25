import React from "react";
import { Box } from "@mui/material";
import ProfileSkills from "../../molecules/Profile/ProfileSkills/ProfileSkills.tsx";
import type { User } from "../../../types/user.types.ts";
import ProfileAbout from "../../molecules/Profile/ProfileAbout/ProfileAbout.tsx";

interface ProfileOverviewProps {
  user: User;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ user }) => {
  return (
    <Box>
      <ProfileSkills skills={user.skills} />
      <ProfileAbout about={user.about} />
    </Box>
  );
};

export default ProfileOverview;
