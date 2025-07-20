import React from "react";
import { Navigate, useParams } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import { useGetRoomByIdQuery } from "../../../store/api/room.api.ts";
import RoomFormTemplate from "../../templates/RoomForm/RoomForm.template.tsx";
import { RoomFormModes } from "../../../constants/room.const.ts";

const EditRoomPage: React.FC = () => {
  const { id } = useParams();
  if (!id) return <Navigate to={RouterPaths.HOME} />;
  const { data: room, isLoading: isLoadingRoom } = useGetRoomByIdQuery(id);
  // TODO: add skeleton
  if (isLoadingRoom) return <div>Loading...</div>;
  return <RoomFormTemplate defaultValues={room} mode={RoomFormModes.EDIT} />;
};

export default EditRoomPage;
