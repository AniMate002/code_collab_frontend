import React from "react";
import type { User } from "../../../types/user.types.ts";
import { useGetUserRoomsQuery } from "../../../store/api/user.api.ts";
import RoomGrid from "../../molecules/Room/RoomGrid/RoomGrid.tsx";
import Title from "../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";

interface ProfileRoomsProps {
  user: User;
}

const ProfileRooms: React.FC<ProfileRoomsProps> = ({ user }) => {
  const theme = useTheme();
  const { data: userRooms, isLoading } = useGetUserRoomsQuery(
    user._id.toString(),
  );
  return (
    <>
      <Title sx={{ paddingBottom: theme.spacing(2) }}>Rooms</Title>
      <RoomGrid rooms={userRooms || []} isLoading={isLoading} />
    </>
  );
};

export default ProfileRooms;
