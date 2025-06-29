import React from "react";
import type { User } from "../../../types/user.types.ts";
import { useGetUserActivityQuery } from "../../../store/api/user.api.ts";
import { Navigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import ActivityLine from "../../molecules/ActivityLine/ActivityLine.tsx";
import { Box } from "@mui/material";
import Title from "../../atoms/Title/Title.tsx";

interface ProfileActivityProps {
  user: User;
}

const ProfileActivity: React.FC<ProfileActivityProps> = ({ user }) => {
  const { data: userActivity, isLoading } = useGetUserActivityQuery(
    user._id.toString(),
  );
  if (isLoading) return <div>Loading</div>;
  if (!userActivity) return <Navigate to={RouterPaths.HOME} replace />;
  return (
    <Box>
      <Title>Activity</Title>
      <ActivityLine activities={userActivity} />
    </Box>
  );
};

export default ProfileActivity;
