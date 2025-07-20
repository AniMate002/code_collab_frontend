import React from "react";
import RoomFormTemplate from "../../templates/RoomForm/RoomForm.template.tsx";
import { RoomFormModes } from "../../../constants/room.const.ts";

const CreateRoomPage: React.FC = () => {
  return <RoomFormTemplate mode={RoomFormModes.CREATE} />;
};

export default CreateRoomPage;
