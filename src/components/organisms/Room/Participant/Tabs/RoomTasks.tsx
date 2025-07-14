import React from "react";
import { useGetRoomTasksQuery } from "../../../../../store/api/room.api.ts";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import RoomTasksGrid from "../../../../molecules/Room/RoomParticipant/RoomTasks/RoomTasksGrid.tsx";
import RoomTaskCreateTaskModal from "../../../../molecules/Room/RoomParticipant/RoomTasks/RoomTaskCreateTaskModal.tsx";

interface RoomTasksProps {
  roomId: string;
}

const RoomTasks: React.FC<RoomTasksProps> = ({ roomId }) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const { data: tasks, isLoading } = useGetRoomTasksQuery(roomId);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TabHeader
        title="Tasks"
        showButton={true}
        btnLabel="Create Task"
        onClick={() => setIsOpenModal(true)}
      />
      <RoomTasksGrid tasks={tasks || []} roomId={roomId} />
      <RoomTaskCreateTaskModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        roomId={roomId}
      />
    </>
  );
};

export default RoomTasks;
