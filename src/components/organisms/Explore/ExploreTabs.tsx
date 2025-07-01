import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import ExploreRooms from "./ExploreRooms.tsx";
import ExploreUsers from "./ExploreUsers.tsx";

const ExploreTabs: React.FC = () => {
  const [exploreTabValue, exploreSetTabValue] = useState(0);

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
        {exploreTabValue === 0 && <ExploreRooms />}
        {exploreTabValue === 1 && <ExploreUsers />}
      </Box>
    </Box>
  );
};

export default ExploreTabs;
