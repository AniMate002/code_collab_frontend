import React from "react";
import type { User } from "../../../types/user.types.ts";
import ProfileHeader from "../../molecules/Profile/ProfileHeader/ProfileHeader.tsx";
import { Box } from "@mui/material";
import ProfileTabs from "../../organisms/Profile/ProfileTabs.tsx";

interface ProfileTemplateProps {
  user: User;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ user }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <ProfileHeader user={user} />
      <ProfileTabs user={user} />
    </Box>
  );
};

export default ProfileTemplate;
