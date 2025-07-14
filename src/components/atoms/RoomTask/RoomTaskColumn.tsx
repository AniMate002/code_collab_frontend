import React from "react";
import type { Task } from "../../../types/room.types.ts";
import { useDroppable } from "@dnd-kit/core";
import {
  type TaskStatus,
  TaskStatuses,
} from "../../../constants/room.const.ts";
import { RoomTaskColumnWrapper } from "./styles.ts";
import Title from "../Title/Title.tsx";
import RoomTaskCard from "./RoomTaskCard.tsx";
import { useTheme } from "@mui/material";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";

interface RoomTaskColumnProps {
  tasks: Task[];
  columnTitle: string;
  columnId: TaskStatus;
  isLoadingChangeStatus: boolean;
}

const RoomTaskColumn: React.FC<RoomTaskColumnProps> = ({
  tasks,
  columnTitle,
  columnId,
  isLoadingChangeStatus,
}) => {
  const theme = useTheme();

  const borderColor =
    columnId === TaskStatuses.NOT_STARTED
      ? "#cf3030"
      : columnId === TaskStatuses.IN_PROGRESS
        ? "#3058cf"
        : "#30cf3b";

  const { setNodeRef } = useDroppable({ id: columnId });
  return (
    <RoomTaskColumnWrapper ref={setNodeRef} sx={{ borderColor }}>
      <Title sx={{ fontSize: "25px", marginBottom: theme.spacing(2) }}>
        {columnTitle}
      </Title>
      {tasks.length === 0 && <SecondaryText>No tasks</SecondaryText>}
      {tasks.map((task) => (
        <RoomTaskCard
          key={task._id}
          task={task}
          isLoadingChangeStatus={isLoadingChangeStatus}
        />
      ))}
    </RoomTaskColumnWrapper>
  );
};

export default RoomTaskColumn;
