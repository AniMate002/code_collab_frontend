import React from "react";
import FollowingTemplate from "../../templates/Following/Following.template.tsx";
import { useGetUserFollowingQuery } from "../../../store/api/user.api.ts";
import { useAuth } from "../../../providers/auth.provider.tsx";

const FollowingPage: React.FC = () => {
  const { authUser } = useAuth();
  const { data: following, isLoading } = useGetUserFollowingQuery(
    authUser?._id.toString() || "",
  );
  return <FollowingTemplate users={following || []} isLoading={isLoading} />;
};

export default FollowingPage;
