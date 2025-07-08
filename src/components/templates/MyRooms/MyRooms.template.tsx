import React from "react";
import Searchbar from "../../molecules/Explore/Searchbar.tsx";
import Title from "../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";
import type { Room } from "../../../types/room.types.ts";
import RoomGrid from "../../molecules/RoomGrid/RoomGrid.tsx";

interface MyRoomsPageProps {
  rooms: Room[];
  isLoading: boolean;
}

const MyRoomsTemplate: React.FC<MyRoomsPageProps> = ({ rooms, isLoading }) => {
  const theme = useTheme();
  return (
    <>
      <Searchbar />
      <Title
        sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(2) }}
      >
        My Rooms
      </Title>
      <RoomGrid rooms={rooms} isLoading={isLoading} />
    </>
  );
};

export default MyRoomsTemplate;
