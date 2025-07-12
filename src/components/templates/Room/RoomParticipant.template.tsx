import React from "react";
import type { Room } from "../../../types/room.types.ts";
import RoomParticipantHeader from "../../molecules/Room/RoomParticipant/RoomParticipantHeader.tsx";
import RoomParticipantTabs from "../../organisms/Room/Participant/RoomParticipantTabs.tsx";
import { RoomParticipantHeaderWrapper } from "../../molecules/Room/RoomParticipant/styles.ts";
import { Box, Skeleton } from "@mui/material";

interface RoomParticipantTemplate {
  room: Room;
}

const RoomParticipantTemplate: React.FC<RoomParticipantTemplate> = ({
  room,
}) => {
  return (
    <>
      <RoomParticipantHeader {...room} />
      <RoomParticipantTabs roomId={room._id.toString()} />
    </>
  );
};

export const RoomParticipantTemplateSkeleton = () => {
  return (
    <>
      <RoomParticipantHeaderWrapper>
        <Skeleton variant="circular" width={110} height={110} />
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={100} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={50} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={600} />
        </Box>
      </RoomParticipantHeaderWrapper>
      <Skeleton
        variant="rounded"
        width={700}
        height={200}
        sx={{ marginTop: "20px" }}
      />
    </>
  );
};

export default RoomParticipantTemplate;
