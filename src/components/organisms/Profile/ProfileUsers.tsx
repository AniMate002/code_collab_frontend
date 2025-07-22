import React from "react";
import {
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
} from "../../../store/api/user.api.ts";
import { type User, UserGridModes } from "../../../types/user.types.ts";
import UserGrid from "../../molecules/UserGrid/UserGrid.tsx";
import TabHeader from "../../molecules/TabHeader/TabHeader.tsx";

export const ProfileUsersModes = {
  FOLLOWERS: "followers",
  FOLLOWING: "following",
} as const;

interface ProfileUsersProps {
  mode: (typeof ProfileUsersModes)[keyof typeof ProfileUsersModes];
  user: User;
}
const ProfileUsers: React.FC<ProfileUsersProps> = ({ mode, user }) => {
  const { data: followers, isLoading: isLoadingFollowers } =
    useGetUserFollowersQuery(user._id.toString(), {
      skip: mode === ProfileUsersModes.FOLLOWING,
    });
  const { data: following, isLoading: isLoadingFollowing } =
    useGetUserFollowingQuery(user._id.toString(), {
      skip: mode === ProfileUsersModes.FOLLOWERS,
    });

  const users = mode === ProfileUsersModes.FOLLOWERS ? followers : following;
  const isLoading =
    mode === ProfileUsersModes.FOLLOWERS
      ? isLoadingFollowers
      : isLoadingFollowing;

  if (isLoadingFollowing || isLoadingFollowers) return <div>Loading...</div>;
  return (
    <div>
      <TabHeader
        title={mode === ProfileUsersModes.FOLLOWING ? "Following" : "Followers"}
        showButton={false}
      />
      <UserGrid
        mode={UserGridModes.COMPACT}
        users={users || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProfileUsers;
