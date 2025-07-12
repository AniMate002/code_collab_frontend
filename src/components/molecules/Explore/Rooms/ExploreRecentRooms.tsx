import React from "react";
import { useGetRecentRoomsQuery } from "../../../../store/api/room.api.ts";
import RoomGrid from "../../Room/RoomGrid/RoomGrid.tsx";
import Title from "../../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";

const ExploreRecentRooms: React.FC = () => {
  const theme = useTheme();
  const { data: recentRooms, isLoading } = useGetRecentRoomsQuery();

  return (
    <>
      <Title sx={{ marginBottom: theme.spacing(2) }}>Recent Rooms</Title>
      <RoomGrid rooms={recentRooms || []} isLoading={isLoading} />
    </>
  );
};

export default ExploreRecentRooms;
