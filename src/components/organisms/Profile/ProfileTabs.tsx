import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import ProfileOverview from "./ProfileOverview.tsx";
import type { User } from "../../../types/user.types.ts";
import ProfileRooms from "./ProfileRooms.tsx";
import ProfileUsers, { ProfileUsersModes } from "./ProfileUsers.tsx";
import ProfileActivity from "./ProfileActivity.tsx";

interface ProfileTabsProps {
  user: User;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ user }) => {
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();
  return (
    <Box sx={{ marginTop: theme.spacing(3) }}>
      <Tabs
        sx={{ marginBottom: theme.spacing(3) }}
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
      >
        <Tab label="Overview" />
        <Tab label="Rooms" />
        <Tab label="Activity" />
        <Tab label="Followers" />
        <Tab label="Following" />
      </Tabs>
      <Box>
        {tabValue === 0 && <ProfileOverview user={user} />}
        {tabValue === 1 && <ProfileRooms user={user} />}
        {tabValue === 2 && <ProfileActivity user={user} />}
        {tabValue === 3 && (
          <ProfileUsers mode={ProfileUsersModes.FOLLOWERS} user={user} />
        )}
        {tabValue === 4 && (
          <ProfileUsers mode={ProfileUsersModes.FOLLOWING} user={user} />
        )}
      </Box>
    </Box>
  );
};

export default ProfileTabs;
