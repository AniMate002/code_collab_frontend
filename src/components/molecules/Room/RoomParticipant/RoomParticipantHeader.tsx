import React from "react";
import type { Room } from "../../../../types/room.types.ts";
import {
  RoomParticipantHeaderAvatarWrapper,
  RoomParticipantHeaderLeaveDescriptionWrapper,
  RoomParticipantHeaderWrapper,
  StyledRoomParticipantHeaderLeaveButton,
} from "./styles.ts";
import { Box } from "@mui/material";
import Title from "../../../atoms/Title/Title.tsx";
import { useJoinRoomMutation } from "../../../../store/api/room.api.ts";
import { Toast } from "../../../atoms/Toast/Toast.ts";
import { useRoomAdmin } from "../../../../hooks/useRoomAdmin.tsx";

const RoomParticipantHeader: React.FC<Room> = ({
  _id,
  image,
  title,
  description,
  contributors,
  admin,
}) => {
  const [leaveRoom, { isLoading }] = useJoinRoomMutation();
  const { isAdmin } = useRoomAdmin(admin?._id?.toString() || "");
  const handleLeaveRoom = async () => {
    try {
      await leaveRoom(_id.toString()).unwrap();
      await Toast.fire({
        icon: "success",
        title: "You have left the room",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  return (
    <RoomParticipantHeaderWrapper>
      <RoomParticipantHeaderAvatarWrapper src={image} alt={title} />
      <Box>
        <Title sx={{ fontSize: "24px" }}>{title}</Title>
        {contributors && (
          <RoomParticipantHeaderLeaveDescriptionWrapper
            sx={{ marginBottom: "3px" }}
          >
            {contributors.length} contributors
          </RoomParticipantHeaderLeaveDescriptionWrapper>
        )}
        <RoomParticipantHeaderLeaveDescriptionWrapper>
          {description}
        </RoomParticipantHeaderLeaveDescriptionWrapper>
      </Box>
      {/*TODO: Add edit room functionality*/}
      {isAdmin ? (
        <StyledRoomParticipantHeaderLeaveButton>
          Edit room
        </StyledRoomParticipantHeaderLeaveButton>
      ) : (
        <StyledRoomParticipantHeaderLeaveButton
          loading={isLoading}
          onClick={handleLeaveRoom}
        >
          Leave room
        </StyledRoomParticipantHeaderLeaveButton>
      )}
    </RoomParticipantHeaderWrapper>
  );
};

export default RoomParticipantHeader;
