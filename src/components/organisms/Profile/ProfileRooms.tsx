import React from "react";
import type { User } from "../../../types/user.types.ts";
import { useGetUserRoomsQuery } from "../../../store/api/user.api.ts";
import RoomGrid from "../../molecules/Room/RoomGrid/RoomGrid.tsx";
import TabHeader from "../../molecules/TabHeader/TabHeader.tsx";

interface ProfileRoomsProps {
  user: User;
}

const ProfileRooms: React.FC<ProfileRoomsProps> = ({ user }) => {
  const { data: userRooms, isLoading } = useGetUserRoomsQuery(
    user._id.toString(),
  );
  return (
    <>
      <TabHeader title="Rooms" showButton={false} />
      <RoomGrid rooms={userRooms || []} isLoading={isLoading} />
    </>
  );
};

export default ProfileRooms;
