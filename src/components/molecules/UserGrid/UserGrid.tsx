import React from "react";
import {
  type User,
  type UserGridMode,
  UserGridModes,
} from "../../../types/user.types.ts";
import { UserGridWrapper } from "./styles.ts";
import {
  UserCardCompact,
  UserCardCompactSkeleton,
  UserCardFull,
  UserCardFullSkeleton,
} from "../../atoms/UserCard/UserCard.tsx";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";

interface UserGridProps {
  users: User[];
  isLoading: boolean;
  mode: UserGridMode;
}

const UserGrid: React.FC<UserGridProps> = ({ users, isLoading, mode }) => {
  const renderedUserCards = users.map((user) =>
    mode === UserGridModes.COMPACT ? (
      <UserCardCompact user={user} key={user._id.toString()} />
    ) : (
      <UserCardFull user={user} key={user._id.toString()} />
    ),
  );
  if (isLoading)
    return mode === UserGridModes.COMPACT ? (
      <UserGridSkeletonCompact />
    ) : (
      <UserGridSkeletonFull />
    );
  if (!isLoading && users && users.length === 0)
    return <SecondaryText>No users</SecondaryText>;
  return <UserGridWrapper>{renderedUserCards}</UserGridWrapper>;
};

const UserGridSkeletonCompact = () => {
  return (
    <UserGridWrapper>
      <UserCardCompactSkeleton />
      <UserCardCompactSkeleton />
      <UserCardCompactSkeleton />
      <UserCardCompactSkeleton />
      <UserCardCompactSkeleton />
    </UserGridWrapper>
  );
};

const UserGridSkeletonFull = () => {
  return (
    <UserGridWrapper>
      <UserCardFullSkeleton />
      <UserCardFullSkeleton />
      <UserCardFullSkeleton />
      <UserCardFullSkeleton />
      <UserCardFullSkeleton />
    </UserGridWrapper>
  );
};

export default UserGrid;
