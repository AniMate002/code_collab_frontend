import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import ExploreRooms from "./ExploreRooms.tsx";
import ExploreUsers from "./ExploreUsers.tsx";
import type { Room } from "../../../types/room.types.ts";
import RoomGrid from "../../molecules/Room/RoomGrid/RoomGrid.tsx";
import { type User, UserGridModes } from "../../../types/user.types.ts";
import UserGrid from "../../molecules/UserGrid/UserGrid.tsx";

interface ExploreTabsProps {
  exploreTabValue: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
  searchedRooms: Room[] | null;
  searchedUsers: User[] | null;
  isLoadingSearch: boolean;
}

const ExploreTabs: React.FC<ExploreTabsProps> = ({
  exploreTabValue,
  setTabValue: exploreSetTabValue,
  searchedRooms,
  searchedUsers,
  isLoadingSearch,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: theme.spacing(3) }}>
      <Tabs
        sx={{
          marginBottom: theme.spacing(3),
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
        }}
        value={exploreTabValue}
        onChange={(_, newValue) => exploreSetTabValue(newValue)}
      >
        <Tab label="Rooms" />
        <Tab label="Users" />
      </Tabs>
      <Box>
        {exploreTabValue === 0 ? (
          searchedRooms ? (
            <RoomGrid rooms={searchedRooms} isLoading={isLoadingSearch} />
          ) : (
            <ExploreRooms />
          )
        ) : null}
        {exploreTabValue === 1 ? (
          searchedUsers ? (
            <UserGrid
              users={searchedUsers}
              isLoading={isLoadingSearch}
              mode={UserGridModes.FULL}
            />
          ) : (
            <ExploreUsers />
          )
        ) : null}
      </Box>
    </Box>
  );
};

export default ExploreTabs;
