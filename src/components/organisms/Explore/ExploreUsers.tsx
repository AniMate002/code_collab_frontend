import React from "react";
import Title from "../../atoms/Title/Title";
import ExploreFeaturedUsers from "../../molecules/Explore/Users/ExploreFeaturedUsers.tsx";
import { useTheme } from "@mui/material";
import ExploreUsersSpecializations from "../../molecules/Explore/Users/ExploreUsersSpecializations.tsx";

const ExploreUsers: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Title sx={{ marginBottom: theme.spacing(2) }}>Featured Users</Title>
      <ExploreFeaturedUsers />
      <ExploreUsersSpecializations />
    </>
  );
};

export default ExploreUsers;
