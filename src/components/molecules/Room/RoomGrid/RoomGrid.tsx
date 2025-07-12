import React from "react";
import type { Room } from "../../../../types/room.types.ts";
import RoomCard, {
  RoomCardSkeleton,
} from "../../../atoms/RoomCard/RoomCard.tsx";
import { RoomGridWrapper } from "./styles.ts";
import SecondaryText from "../../../atoms/SecondaryText/SecondaryText.tsx";

interface RoomGridProps {
  rooms: Room[];
  isLoading: boolean;
}

const RoomGrid: React.FC<RoomGridProps> = ({ rooms, isLoading }) => {
  const renderedRoomCards = rooms.map((room) => (
    <RoomCard room={room} key={room._id.toString()} />
  ));
  if (isLoading) return <RoomGridSkeleton />;
  if (!isLoading && rooms && rooms.length === 0)
    return <SecondaryText>No rooms</SecondaryText>;
  return <RoomGridWrapper>{renderedRoomCards}</RoomGridWrapper>;
};

export default RoomGrid;

const RoomGridSkeleton = () => {
  return (
    <RoomGridWrapper>
      <RoomCardSkeleton />
      <RoomCardSkeleton />
      <RoomCardSkeleton />
      <RoomCardSkeleton />
    </RoomGridWrapper>
  );
};
