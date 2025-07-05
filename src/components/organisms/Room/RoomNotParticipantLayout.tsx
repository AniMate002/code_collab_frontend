import React from "react";
import {
  RoomNotParticipantHeaderWrapper,
  RoomNotParticipantLayoutWrapper,
} from "./styles.ts";
import type { Room } from "../../../types/room.types.ts";
import Title from "../../atoms/Title/Title.tsx";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import {
  useGetRoomContributorsQuery,
  useJoinRoomMutation,
} from "../../../store/api/room.api.ts";
import { Avatar, AvatarGroup, Box, Skeleton, useTheme } from "@mui/material";
import { NavLink } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import { RoomTypes } from "../../../constants/room.const.ts";
import Button from "../../atoms/Button/Button.tsx";
import { Toast } from "../../atoms/Toast/Toast.ts";

interface RoomNotParticipantLayoutProps {
  room: Room;
}

const RoomNotParticipantLayout: React.FC<RoomNotParticipantLayoutProps> = ({
  room,
}) => {
  const theme = useTheme();
  const [joinRoom, { isLoading: isLoadingJoinRoom }] = useJoinRoomMutation();
  const { data: contributors, isLoading } = useGetRoomContributorsQuery(
    room._id.toString(),
  );
  const handleJoinRoom = async () => {
    try {
      if (room.type === RoomTypes.PRIVATE) {
        //   TODO: ADD sendRequest LOGIC AFTER ADDING NOTIFICATIONS
      } else {
        await joinRoom(room._id.toString()).unwrap();
        await Toast.fire({
          icon: "success",
          title: "Successfully joined room",
        });
      }
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  return (
    <RoomNotParticipantLayoutWrapper>
      <RoomNotParticipantHeaderWrapper>
        <img
          src={room.image}
          alt={room.title}
          style={{ minHeight: "200px", minWidth: "100%" }}
        />
      </RoomNotParticipantHeaderWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(1),
          flexWrap: "wrap",
        }}
      >
        <Title>{room.title}</Title>
        {room.type === RoomTypes.PRIVATE ? (
          <LockOutlineIcon sx={{ color: theme.palette.text.secondary }} />
        ) : (
          <LockOpenIcon sx={{ color: theme.palette.text.secondary }} />
        )}
      </Box>
      <SecondaryText sx={{ marginBottom: theme.spacing(2) }}>
        {room.description}
      </SecondaryText>
      {isLoading ? (
        <Skeleton variant="rounded" width={210} height={60} />
      ) : (
        <AvatarGroup total={contributors?.length || 0}>
          {contributors?.map((contributor) => (
            <NavLink
              to={RouterPaths.PROFILE(contributor._id.toString())}
              key={contributor._id.toString()}
            >
              <Avatar
                key={contributor._id}
                src={contributor.avatar}
                alt={contributor.name}
              />
            </NavLink>
          ))}
        </AvatarGroup>
      )}
      <Button
        onClick={handleJoinRoom}
        loading={isLoadingJoinRoom}
        sx={{ marginTop: theme.spacing(4), minWidth: "300px", width: "auto" }}
      >
        {room.type === RoomTypes.PRIVATE ? "ASK TO JOIN" : "JOIN"}
      </Button>
    </RoomNotParticipantLayoutWrapper>
  );
};

export default RoomNotParticipantLayout;
