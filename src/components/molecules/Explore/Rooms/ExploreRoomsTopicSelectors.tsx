import React from "react";
import {
  type RoomTopic,
  RoomTopics,
} from "../../../../constants/room.const.ts";
import {
  RoomTopicSelectorsWrapper,
  RoomTopicSelectorWrapper,
} from "./styles.ts";
import { useTheme } from "@mui/material";

interface ExploreRoomsTopicSelectorsProps {
  selectedTopic: RoomTopic;
  setSelectedTopic: React.Dispatch<React.SetStateAction<RoomTopic>>;
}

const ExploreRoomsTopicSelectors: React.FC<ExploreRoomsTopicSelectorsProps> = ({
  selectedTopic,
  setSelectedTopic,
}) => {
  const theme = useTheme();
  const renderedTopicsSelectors = (
    Object.keys(RoomTopics) as Array<keyof typeof RoomTopics>
  ).map((topic) => (
    <RoomTopicSelectorWrapper
      onClick={() => setSelectedTopic(RoomTopics[topic])}
      key={topic}
      sx={{
        color:
          selectedTopic === RoomTopics[topic]
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary,
        backgroundColor:
          selectedTopic === RoomTopics[topic]
            ? theme.palette.primary.light
            : theme.palette.secondary.main,
      }}
    >
      {topic}
    </RoomTopicSelectorWrapper>
  ));
  return (
    <RoomTopicSelectorsWrapper>
      {renderedTopicsSelectors}
    </RoomTopicSelectorsWrapper>
  );
};

export default ExploreRoomsTopicSelectors;
