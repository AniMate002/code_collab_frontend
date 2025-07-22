import React from "react";
import { useGetRoomActivityQuery } from "../../../../../store/api/room.api.ts";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import ActivityLine from "../../../../molecules/ActivityLine/ActivityLine.tsx";
import { ActivityLineModes } from "../../../../../constants/activity.const.ts";

interface RoomActivityProps {
  roomId: string;
}

const RoomActivity: React.FC<RoomActivityProps> = ({ roomId }) => {
  const { data: activities, isLoading } = useGetRoomActivityQuery(roomId);
  return (
    <>
      <TabHeader title={"Activity"} showButton={false} />
      <ActivityLine
        activities={activities || []}
        isLoading={isLoading}
        mode={ActivityLineModes.ROOM}
      />
    </>
  );
};

export default RoomActivity;
