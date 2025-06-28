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
} from "../../atoms/UserCard/UserCard.tsx";

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
  if (isLoading) return <UserGridSkeleton />;
  return <UserGridWrapper>{renderedUserCards}</UserGridWrapper>;
};

const UserGridSkeleton = () => {
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

export default UserGrid;
