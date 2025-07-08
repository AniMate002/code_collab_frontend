import React from "react";
import MyRoomsTemplate from "../../templates/MyRooms/MyRooms.template.tsx";
import { useGetUserRoomsQuery } from "../../../store/api/user.api.ts";
import { useAuth } from "../../../providers/auth.provider.tsx";

const MyRoomsPage: React.FC = () => {
  const { authUser } = useAuth();
  const { data: myRooms, isLoading } = useGetUserRoomsQuery(
    authUser?._id.toString() || "",
  );
  return <MyRoomsTemplate rooms={myRooms || []} isLoading={isLoading} />;
};

export default MyRoomsPage;
