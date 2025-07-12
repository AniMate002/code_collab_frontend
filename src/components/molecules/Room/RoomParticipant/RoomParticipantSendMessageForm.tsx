import React from "react";
import { RoomParticipantSendMessageFormWrapper } from "./styles.ts";
import { Avatar } from "@mui/material";
import { useAuth } from "../../../../providers/auth.provider.tsx";
import Input from "../../../atoms/Input/Input.tsx";
import Button from "../../../atoms/Button/Button.tsx";
import { useSendMessageMutation } from "../../../../store/api/room.api.ts";
import { Toast } from "../../../atoms/Toast/Toast.ts";

interface RoomParticipantSendMessageFormProps {
  roomId: string;
}

const RoomParticipantSendMessageForm: React.FC<
  RoomParticipantSendMessageFormProps
> = ({ roomId }) => {
  const [message, setMessage] = React.useState("");
  const { authUser } = useAuth();
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    try {
      await sendMessage({
        body: message,
        roomId,
      }).unwrap();
      setMessage("");
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  return (
    <RoomParticipantSendMessageFormWrapper onSubmit={handleSendMessage}>
      <Avatar src={authUser?.avatar} alt={authUser?.name} />
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={"Message #general"}
      />
      <Button
        type={"submit"}
        disabled={!message}
        loading={isLoading}
        sx={{ width: "200px" }}
      >
        Send
      </Button>
    </RoomParticipantSendMessageFormWrapper>
  );
};

export default RoomParticipantSendMessageForm;
