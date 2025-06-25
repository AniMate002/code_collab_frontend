import React from "react";
import type { User } from "../../../types/user.types.ts";
import { ProfileHeaderWrapper } from "./styles.ts";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import Button from "../../atoms/Button/Button.tsx";

interface ProfileHeaderProps {
  user: User | undefined;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const theme = useTheme();
  return (
    <ProfileHeaderWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(2),
          flexShrink: 0,
        }}
      >
        <Avatar
          src={user?.avatar}
          alt={user?.name}
          sx={{ height: "128px", width: "128px" }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
            {user?.name}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.secondary, fontSize: "16px" }}
          >
            {user?.specialization}
          </Typography>

          {user?.createdAt && (
            <Typography
              sx={{ color: theme.palette.text.secondary, fontSize: "16px" }}
            >
              Joined in {new Date(user?.createdAt).getFullYear()}
            </Typography>
          )}
        </Box>
      </Box>

      <Button sx={{ width: "200px" }}>Follow</Button>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
