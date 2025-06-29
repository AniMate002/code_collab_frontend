import React from "react";
import type { Activity } from "../../../types/activity.types.ts";
import ActivityItem from "../../atoms/ActivityItem/ActivityItem.tsx";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

interface ActivityLineProps {
  activities: Activity[];
}

const ActivityLine: React.FC<ActivityLineProps> = ({ activities }) => {
  const renderedActivities = [...activities]
    .reverse()
    .map((activity, key, array) => (
      <ActivityItem
        key={activity._id.toString()}
        activity={activity}
        isLast={key === array.length - 1}
      />
    ));
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}
    >
      {renderedActivities}
    </Timeline>
  );
};

export default ActivityLine;
