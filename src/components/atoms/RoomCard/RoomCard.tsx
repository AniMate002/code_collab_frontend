import React from "react";
import type { Room } from "../../../types/room.types.ts";
import {
  RoomCardWrapper,
  RoomDescriptionWrapper,
  RoomImageWrapper,
  RoomTitleWrapper,
  RoomTopicWrapper,
} from "./styles.ts";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const navigate = useNavigate();
  return (
    <RoomCardWrapper
      onClick={() => navigate(RouterPaths.ROOM(room._id.toString()))}
    >
      <RoomImageWrapper>
        <img src={room.image} alt={room.title} />
      </RoomImageWrapper>
      <RoomTopicWrapper>{room.topic}</RoomTopicWrapper>
      <RoomTitleWrapper>{room.title}</RoomTitleWrapper>
      <RoomDescriptionWrapper>{room.description}</RoomDescriptionWrapper>
    </RoomCardWrapper>
  );
};

export default RoomCard;

export const RoomCardSkeleton = () => {
  return (
    <RoomCardWrapper>
      <Skeleton variant="rounded" width={250} height={250} />
      <Skeleton variant="rounded" width={50} height={20} />
      <Skeleton variant="text" width={150} height={20} />
      <Skeleton variant="rounded" width={250} height={60} />
    </RoomCardWrapper>
  );
};
