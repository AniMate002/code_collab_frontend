import React from "react";
import type { User } from "../../../types/user.types.ts";
import { UserCardCompactWrapper } from "./styles.ts";
import { Avatar, Skeleton, Typography, useTheme } from "@mui/material";
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
  return <div>{user.name}</div>;
};

export const UserCardCompactSkeleton: React.FC = () => {
  return <Skeleton variant="rounded" width={220} height={65} />;
};
