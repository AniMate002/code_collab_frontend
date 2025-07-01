import React from "react";
import ExploreRecentRooms from "../../molecules/Explore/Rooms/ExploreRecentRooms.tsx";
import ExploreRoomTopics from "../../molecules/Explore/Rooms/ExploreRoomTopics.tsx";

const ExploreRooms: React.FC = () => {
  return (
    <>
      <ExploreRecentRooms />
      <ExploreRoomTopics />
    </>
  );
};

export default ExploreRooms;
