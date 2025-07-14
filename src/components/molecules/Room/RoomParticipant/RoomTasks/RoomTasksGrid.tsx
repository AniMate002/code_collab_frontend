import React from "react";
import type { Task } from "../../../../../types/room.types.ts";
import {
  closestCorners,
  DndContext,
  type DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { RoomTasksGridWrapper } from "./styles.ts";
import RoomTaskColumn from "../../../../atoms/RoomTask/RoomTaskColumn.tsx";
import { TaskStatuses } from "../../../../../constants/room.const.ts";
import { useChangeRoomTaskStatusMutation } from "../../../../../store/api/room.api.ts";
import { Toast } from "../../../../atoms/Toast/Toast.ts";

interface RoomTasksGridProps {
  tasks: Task[];
  roomId: string;
}

const RoomTasksGrid: React.FC<RoomTasksGridProps> = ({ tasks, roomId }) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const [changeTaskStatus, { isLoading: isLoadingChangeStatus }] =
    useChangeRoomTaskStatusMutation();

  const handleDragEnd = async (e: DragEndEvent) => {
    console.log(e);
    const { active, over } = e;
    if (active.id === over?.id) return;
    if (!over) return;
    else {
      try {
        await changeTaskStatus({
          roomId: roomId.toString(),
          taskId: active.id.toString(),
          status: over.id.toString(),
        }).unwrap();
      } catch (error: any) {
        await Toast.fire({
          icon: "error",
          title: error?.data?.message,
        });
      }
    }
  };
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <RoomTasksGridWrapper>
        <RoomTaskColumn
          columnTitle={"Not started"}
          isLoadingChangeStatus={isLoadingChangeStatus}
          columnId={TaskStatuses.NOT_STARTED}
          tasks={tasks.filter(
            (task) => task.status === TaskStatuses.NOT_STARTED,
          )}
        />
        <RoomTaskColumn
          columnTitle={"In progress"}
          isLoadingChangeStatus={isLoadingChangeStatus}
          columnId={TaskStatuses.IN_PROGRESS}
          tasks={tasks.filter(
            (task) => task.status === TaskStatuses.IN_PROGRESS,
          )}
        />
        <RoomTaskColumn
          columnTitle={"Finished"}
          isLoadingChangeStatus={isLoadingChangeStatus}
          columnId={TaskStatuses.FINISHED}
          tasks={tasks.filter((task) => task.status === TaskStatuses.FINISHED)}
        />
      </RoomTasksGridWrapper>
    </DndContext>
  );
};

export default RoomTasksGrid;
