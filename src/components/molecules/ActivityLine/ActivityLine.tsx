import React from "react";
import type { Activity } from "../../../types/activity.types.ts";
import ActivityItem from "../../atoms/ActivityItem/ActivityItem.tsx";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { useTheme } from "@mui/material";

interface ActivityLineProps {
  activities: Activity[];
  isLoading: boolean;
}

const ActivityLine: React.FC<ActivityLineProps> = ({
  activities,
  isLoading,
}) => {
  const theme = useTheme();
  const renderedActivities = [...activities]
    .reverse()
    .map((activity, key, array) => (
      <ActivityItem
        key={activity._id.toString()}
        activity={activity}
        isLast={key === array.length - 1}
      />
    ));
  if (isLoading) return <div>Loading</div>;
  if (!isLoading && activities && activities.length === 0)
    return (
      <SecondaryText sx={{ marginTop: theme.spacing(2) }}>
        No activity
      </SecondaryText>
    );
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
