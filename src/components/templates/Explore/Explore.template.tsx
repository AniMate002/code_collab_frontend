import React, { useState } from "react";
import Searchbar from "../../molecules/Explore/Searchbar.tsx";
import ExploreTabs from "../../organisms/Explore/ExploreTabs.tsx";
import type { Room } from "../../../types/room.types.ts";
import type { User } from "../../../types/user.types.ts";

const ExploreTemplate: React.FC = () => {
  const [exploreTabValue, setTabValue] = useState(0);
  const [searchedRooms, setSearchedRooms] = useState<Room[] | null>(null);
  const [searchedUsers, setSearchedUsers] = useState<User[] | null>(null);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  return (
    <>
      <Searchbar
        exploreTabValue={exploreTabValue}
        setSearchedRooms={setSearchedRooms}
        setSearchedUsers={setSearchedUsers}
        setIsLoadingSearch={setIsLoadingSearch}
      />
      <ExploreTabs
        exploreTabValue={exploreTabValue}
        setTabValue={setTabValue}
        searchedRooms={searchedRooms}
        searchedUsers={searchedUsers}
        isLoadingSearch={isLoadingSearch}
      />
    </>
  );
};

export default ExploreTemplate;
