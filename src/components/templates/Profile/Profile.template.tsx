import React from "react";
import type { User } from "../../../types/user.types.ts";
import ProfileHeader from "../../molecules/ProfileHeader/ProfileHeader.tsx";
import { Box } from "@mui/material";

interface ProfileTemplateProps {
  user: User | undefined;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ user }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <ProfileHeader user={user} />
    </Box>
  );
};

export default ProfileTemplate;
