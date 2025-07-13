import React from "react";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import { useGetRoomContributorsQuery } from "../../../../../store/api/room.api.ts";
import UserGrid from "../../../../molecules/UserGrid/UserGrid.tsx";
import { UserGridModes } from "../../../../../types/user.types.ts";

interface RoomContributorsProps {
  roomId: string;
}

const RoomContributors: React.FC<RoomContributorsProps> = ({ roomId }) => {
  const { data: contributors, isLoading } = useGetRoomContributorsQuery(roomId);
  return (
    <>
      <TabHeader title="Contributors" showButton={false} />
      <UserGrid
        users={contributors || []}
        isLoading={isLoading}
        mode={UserGridModes.COMPACT}
      />
    </>
  );
};

export default RoomContributors;
