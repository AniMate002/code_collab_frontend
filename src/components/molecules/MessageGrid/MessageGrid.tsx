import React from "react";
import type { Message } from "../../../types/room.types.ts";
import MessageItem from "../../atoms/MessageItem/MessageItem.tsx";
import { MessageGridWrapper } from "./styles.ts";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { useAuth } from "../../../providers/auth.provider.tsx";
import { MessageItemWrapper } from "../../atoms/MessageItem/styles.ts";
import { Skeleton } from "@mui/material";

interface MessageGridProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageGrid: React.FC<MessageGridProps> = ({ messages, isLoading }) => {
  const { authUser } = useAuth();
  const renderedMessages = messages.map((message) => (
    <MessageItem
      key={message._id}
      message={message}
      isMe={authUser?._id.toString() === message.sender?._id?.toString()}
    />
  ));
  if (isLoading) return <MessageGridSkeleton />;
  if (!isLoading && messages && messages.length === 0)
    return <SecondaryText>No messages</SecondaryText>;
  return <MessageGridWrapper>{renderedMessages}</MessageGridWrapper>;
};

const MessageGridSkeleton = () => {
  return (
    <MessageGridWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
      </MessageItemWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
      </MessageItemWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
      </MessageItemWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
      </MessageItemWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
      </MessageItemWrapper>
      <MessageItemWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
      </MessageItemWrapper>
    </MessageGridWrapper>
  );
};

export default MessageGrid;
