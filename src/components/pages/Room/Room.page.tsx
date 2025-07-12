import React from "react";
import { useGetRoomByIdQuery } from "../../../store/api/room.api.ts";
import { Navigate, useParams } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import { useAuth } from "../../../providers/auth.provider.tsx";
import RoomNotParticipantTemplate from "../../templates/Room/RoomNotParticipant.template.tsx";
import RoomParticipantTemplate, {
  RoomParticipantTemplateSkeleton,
} from "../../templates/Room/RoomParticipant.template.tsx";

const RoomPage: React.FC = () => {
  const { authUser, isAuth } = useAuth();
  const { id } = useParams();
  if (!id) return <Navigate to={RouterPaths.HOME} />;
  const { data: room, isLoading } = useGetRoomByIdQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (!room) return <Navigate to={RouterPaths.HOME} />;

  if (isLoading) return <RoomParticipantTemplateSkeleton />;

  const isParticipating = isAuth
    ? room.contributors?.some(
        (contributor) => contributor.toString() === authUser?._id.toString(),
      )
    : false;
  return !isParticipating ? (
    <RoomNotParticipantTemplate room={room} />
  ) : (
    <RoomParticipantTemplate room={room} />
  );
};

export default RoomPage;
