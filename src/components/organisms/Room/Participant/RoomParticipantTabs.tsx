import React from "react";
import { Box, useTheme } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import RoomChat from "./Tabs/RoomChat.tsx";
import RoomFiles from "./Tabs/RoomFiles.tsx";
import RoomLinks from "./Tabs/RoomLinks.tsx";
import RoomContributors from "./Tabs/RoomContributors.tsx";
import RoomTasks from "./Tabs/RoomTasks.tsx";
import RoomActivity from "./Tabs/RoomActivity.tsx";

interface RoomParticipantTabsProps {
  roomId: string;
}

const RoomParticipantTabs: React.FC<RoomParticipantTabsProps> = ({
  roomId,
}) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);
  return (
    <Box sx={{ marginTop: theme.spacing(3) }}>
      <Tabs
        sx={{
          marginBottom: theme.spacing(3),
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
        }}
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
      >
        <Tab label="Chat" />
        <Tab label="Images" />
        <Tab label="Links" />
        <Tab label="Activity" />
        <Tab label="Contributors" />
        <Tab label="Tasks" />
      </Tabs>
      <Box>
        {tabValue === 0 && <RoomChat roomId={roomId} />}
        {tabValue === 1 && <RoomFiles roomId={roomId} />}
        {tabValue === 2 && <RoomLinks roomId={roomId} />}
        {tabValue === 3 && <RoomActivity roomId={roomId} />}
        {tabValue === 4 && <RoomContributors roomId={roomId} />}
        {tabValue === 5 && <RoomTasks roomId={roomId} />}
      </Box>
    </Box>
  );
};

export default RoomParticipantTabs;
