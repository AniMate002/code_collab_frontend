import React from "react";
import { Box, useTheme } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import RoomChat from "./Tabs/RoomChat.tsx";

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
        <Tab label="Files" />
        <Tab label="Links" />
        <Tab label="Activity" />
        <Tab label="Contributors" />
        <Tab label="Tasks" />
      </Tabs>
      <Box>{tabValue === 0 && <RoomChat roomId={roomId} />}</Box>
    </Box>
  );
};

export default RoomParticipantTabs;
