import React from "react";
import {
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
} from "../../../store/api/user.api.ts";
import type { User } from "../../../types/user.types.ts";

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

  if (isLoadingFollowing || isLoadingFollowers) return <div>Loading...</div>;
  return (
    <div>
      {followers?.length} : {following?.length}
    </div>
  );
};

export default ProfileUsers;
