import React from "react";
import Title from "../../../../atoms/Title/Title";
import { Box, useTheme } from "@mui/material";
import { useGetRoomMessagesQuery } from "../../../../../store/api/room.api.ts";
import RoomParticipantSendMessageForm from "../../../../molecules/Room/RoomParticipant/RoomParticipantSendMessageForm.tsx";
import MessageGrid from "../../../../molecules/MessageGrid/MessageGrid.tsx";

interface RoomChatProps {
  roomId: string;
}

const RoomChat: React.FC<RoomChatProps> = ({ roomId }) => {
  const theme = useTheme();
  const { data: messages, isLoading } = useGetRoomMessagesQuery(roomId, {
    pollingInterval: 2000,
  });
  if (isLoading) return <Title>Loading...</Title>;
  return (
    <Box sx={{ position: "relative", height: "30vh" }}>
      <Title sx={{ marginBottom: theme.spacing(2) }}>Chat</Title>
      <MessageGrid messages={messages || []} isLoading={isLoading} />
      {!isLoading && <RoomParticipantSendMessageForm roomId={roomId} />}
    </Box>
  );
};

export default RoomChat;
