import React from "react";
import type { User } from "../../../types/user.types.ts";
import ProfileHeader from "../../molecules/Profile/ProfileHeader/ProfileHeader.tsx";
import { Box, Skeleton } from "@mui/material";
import ProfileTabs from "../../organisms/Profile/ProfileTabs.tsx";

interface ProfileTemplateProps {
  user: User;
  isMe: boolean;
  isFollowing: boolean;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
  user,
  isMe,
  isFollowing,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <ProfileHeader user={user} isMe={isMe} isFollowing={isFollowing} />
      <ProfileTabs user={user} />
    </Box>
  );
};

export default ProfileTemplate;

export const ProfileTemplateSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="circular"
        width={128}
        height={128}
        sx={{ marginBottom: "20px" }}
      />
      <Skeleton
        variant="rounded"
        width={400}
        height={60}
        sx={{ marginBottom: "20px" }}
      />
      <Skeleton variant="rounded" width={210} height={60} />
    </>
  );
};
