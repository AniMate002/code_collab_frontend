import React from "react";
import type { Message } from "../../../types/room.types.ts";
import { MessageBodyWrapper, MessageItemWrapper } from "./styles.ts";
import { Avatar, Box, useTheme } from "@mui/material";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";

interface MessageItemProps {
  message: Message;
  isMe: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, isMe }) => {
  const theme = useTheme();
  return (
    <MessageItemWrapper sx={{ flexDirection: isMe ? "row-reverse" : "row" }}>
      <Avatar src={message.sender.avatar} />
      <Box>
        <SecondaryText
          sx={{ fontSize: "12px", textAlign: isMe ? "right" : "left" }}
        >
          {message.sender.name}
        </SecondaryText>
        <MessageBodyWrapper
          sx={{
            width: "fit-content",
            minWidth: "40px",
            backgroundColor: isMe
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            color: isMe
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
          }}
        >
          {message.body}
        </MessageBodyWrapper>
      </Box>
    </MessageItemWrapper>
  );
};

export default MessageItem;
