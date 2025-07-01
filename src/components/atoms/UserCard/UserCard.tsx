import React from "react";
import type { User } from "../../../types/user.types.ts";
import {
  UserCardCompactWrapper,
  UserCardFullAvatarWrapper,
  UserCardFullSpecializationWrapper,
  UserCardFullUsernameWrapper,
  UserCardFullWrapper,
} from "./styles.ts";
import { Avatar, Box, Skeleton, Typography, useTheme } from "@mui/material";
import { RouterPaths } from "../../../router/paths.tsx";

interface UserCardProps {
  user: User;
}

export const UserCardCompact: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme();
  return (
    <UserCardCompactWrapper to={RouterPaths.PROFILE(user._id.toString())}>
      <Avatar src={user.avatar} alt={user.name} />
      <Typography
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "140px",
        }}
      >
        {user.name}
      </Typography>
    </UserCardCompactWrapper>
  );
};

export const UserCardFull: React.FC<UserCardProps> = ({ user }) => {
  return (
    <UserCardFullWrapper to={RouterPaths.PROFILE(user._id.toString())}>
      <UserCardFullAvatarWrapper src={user.avatar} alt={user.name} />
      <UserCardFullUsernameWrapper>{user.name}</UserCardFullUsernameWrapper>
      <UserCardFullSpecializationWrapper>
        {user.specialization}
      </UserCardFullSpecializationWrapper>
    </UserCardFullWrapper>
  );
};

export const UserCardCompactSkeleton: React.FC = () => {
  return <Skeleton variant="rounded" width={220} height={65} />;
};

export const UserCardFullSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Skeleton variant="circular" width={200} height={200} />
      <Skeleton variant="text" width={100} />
      <Skeleton variant="text" width={70} sx={{ fontSize: "12px" }} />
    </Box>
  );
};
