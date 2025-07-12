import React from "react";
import RoomNotParticipantLayout from "../../organisms/Room/NotParticipant/RoomNotParticipantLayout.tsx";
import type { Room } from "../../../types/room.types.ts";

interface RoomNotParticipantTemplateProps {
  room: Room;
}

const RoomNotParticipantTemplate: React.FC<RoomNotParticipantTemplateProps> = ({
  room,
}) => {
  return <RoomNotParticipantLayout room={room} />;
};

export default RoomNotParticipantTemplate;
