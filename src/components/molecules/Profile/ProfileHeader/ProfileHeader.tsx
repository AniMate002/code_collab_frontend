import React from "react";
import type { User } from "../../../../types/user.types.ts";
import { ProfileHeaderWrapper } from "./styles.ts";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import Button from "../../../atoms/Button/Button.tsx";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../../router/paths.tsx";
import { useFollowUserMutation } from "../../../../store/api/user.api.ts";
import { Toast } from "../../../atoms/Toast/Toast.ts";

interface ProfileHeaderProps {
  user: User;
  isMe: boolean;
  isFollowing: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  isMe,
  isFollowing,
}) => {
  const navigate = useNavigate();
  const [followUser, { isLoading }] = useFollowUserMutation();
  const handleClickButton = async () => {
    if (isMe) return navigate(RouterPaths.EDIT_MY_PROFILE);
    else {
      try {
        followUser(user._id.toString()).unwrap();
      } catch (error: any) {
        await Toast.fire({
          icon: "error",
          title: error?.data?.message,
        });
      }
    }
  };
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

      <Button
        onClick={handleClickButton}
        loading={isLoading}
        sx={{
          width: "200px",
          backgroundColor: isMe
            ? theme.palette.primary.main
            : isFollowing
              ? theme.palette.secondary.main
              : "#0A80ED",
          color: isMe
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary,
        }}
      >
        {isMe ? "Edit profile" : isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
