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

interface RoomCardProps {
  room: Room;
}

// TODO: make these cards LINKS

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <RoomCardWrapper>
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
      <Skeleton variant="rounded" width={250} height={50} />
    </RoomCardWrapper>
  );
};
