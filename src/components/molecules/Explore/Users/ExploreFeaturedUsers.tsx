import React from "react";
import { useGetFeaturedUsersQuery } from "../../../../store/api/user.api.ts";
import UserGrid from "../../UserGrid/UserGrid.tsx";
import { UserGridModes } from "../../../../types/user.types.ts";

const ExploreFeaturedUsers: React.FC = () => {
  const { data: featuredUsers, isLoading } = useGetFeaturedUsersQuery();
  return (
    <UserGrid
      users={featuredUsers || []}
      isLoading={isLoading}
      mode={UserGridModes.FULL}
    />
  );
};

export default ExploreFeaturedUsers;
