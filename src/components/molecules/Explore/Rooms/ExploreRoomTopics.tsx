import React, { useEffect, useState } from "react";
import Title from "../../../atoms/Title/Title";
import { useTheme } from "@mui/material";
import {
  type RoomTopic,
  RoomTopics,
} from "../../../../constants/room.const.ts";
import ExploreRoomsTopicSelectors from "./ExploreRoomsTopicSelectors.tsx";
import { useGetRoomsByTopicQuery } from "../../../../store/api/room.api.ts";
import RoomGrid from "../../Room/RoomGrid/RoomGrid.tsx";

const ExploreRoomTopics: React.FC = () => {
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState<RoomTopic>(RoomTopics.ALL);
  const { data: topicRooms, isLoading } =
    useGetRoomsByTopicQuery(selectedTopic);
  useEffect(() => {}, [selectedTopic]);
  return (
    <>
      <Title
        sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(2) }}
      >
        Topics
      </Title>
      <ExploreRoomsTopicSelectors
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <RoomGrid rooms={topicRooms || []} isLoading={isLoading} />
    </>
  );
};

export default ExploreRoomTopics;
