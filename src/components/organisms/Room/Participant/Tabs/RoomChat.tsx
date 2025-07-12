import React from "react";
import Title from "../../../../atoms/Title/Title";
import { Box } from "@mui/material";
import { useGetRoomMessagesQuery } from "../../../../../store/api/room.api.ts";
import RoomParticipantSendMessageForm from "../../../../molecules/Room/RoomParticipant/RoomParticipantSendMessageForm.tsx";
import MessageGrid from "../../../../molecules/MessageGrid/MessageGrid.tsx";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";

interface RoomChatProps {
  roomId: string;
}

const RoomChat: React.FC<RoomChatProps> = ({ roomId }) => {
  const { data: messages, isLoading } = useGetRoomMessagesQuery(roomId, {
    pollingInterval: 2000,
  });
  if (isLoading) return <Title>Loading...</Title>;
  return (
    <Box sx={{ position: "relative", height: "32vh" }}>
      <TabHeader title="Chat" showButton={false} />
      <MessageGrid messages={messages || []} isLoading={isLoading} />
      {!isLoading && <RoomParticipantSendMessageForm roomId={roomId} />}
    </Box>
  );
};

export default RoomChat;
