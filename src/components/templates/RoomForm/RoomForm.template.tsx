import React from "react";
import Title from "../../atoms/Title/Title";
import RoomForm from "../../organisms/RoomForm/RoomForm.tsx";
import type { Room } from "../../../types/room.types.ts";
import {
  type RoomFormMode,
  RoomFormModes,
} from "../../../constants/room.const.ts";

interface RoomFormTemplateProps {
  defaultValues?: Room;
  mode: RoomFormMode;
}

const RoomFormTemplate: React.FC<RoomFormTemplateProps> = ({
  mode,
  defaultValues,
}) => {
  return (
    <>
      <Title>
        {mode === RoomFormModes.CREATE ? "Create a room" : "Edit room"}
      </Title>
      <RoomForm defaultValues={defaultValues} mode={mode} />
    </>
  );
};

export default RoomFormTemplate;
