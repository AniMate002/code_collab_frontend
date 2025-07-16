import React from "react";
import type { Task } from "../../../types/room.types.ts";
import {
  RoomTaskCardAssignedToWrapper,
  RoomTaskCardDescriptionWrapper,
  RoomTaskCardWrapper,
} from "./styles.ts";
import { useDraggable } from "@dnd-kit/core";
import { Avatar, Typography } from "@mui/material";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";
import { formatDistanceToNow } from "date-fns";
import { theme } from "../../../constants/theme.const.tsx";

interface RoomTaskCardProps {
  task: Task;
  isLoadingChangeStatus: boolean;
}

const RoomTaskCard: React.FC<RoomTaskCardProps> = ({
  task,
  isLoadingChangeStatus,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id.toString(),
    disabled: isLoadingChangeStatus,
  });

  const formattedDate = task.deadline
    ? formatDistanceToNow(task.deadline, { addSuffix: true })
    : "";

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: isLoadingChangeStatus ? "not-allowed" : "grab",
  };
  return (
    <RoomTaskCardWrapper
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
        {task.title}
      </Typography>
      <RoomTaskCardDescriptionWrapper>
        {task.description}
      </RoomTaskCardDescriptionWrapper>
      {task.deadline && (
        <SecondaryText
          sx={{
            marginLeft: "auto",
            fontSize: "12px",
            marginTop: theme.spacing(1),
          }}
        >
          Deadline: {formattedDate}
        </SecondaryText>
      )}
      <RoomTaskCardAssignedToWrapper>
        <Avatar
          sx={{ height: "30px", width: "30px" }}
          src={task.assignedTo.avatar}
          alt={task.assignedTo.name}
        />
        <SecondaryText sx={{ fontSize: "12px" }}>
          {task.assignedTo.name}
        </SecondaryText>
      </RoomTaskCardAssignedToWrapper>
    </RoomTaskCardWrapper>
  );
};

export default RoomTaskCard;
