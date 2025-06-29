import React from "react";
import type { Activity } from "../../../types/activity.types.ts";
import { formatDistanceToNow } from "date-fns";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {
  ActivityTypeIcons,
  type ActivityType,
} from "../../../constants/activity.const.ts";
import { Typography, useTheme } from "@mui/material";

interface ActivityItemProps {
  activity: Activity;
  isLast: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, isLast }) => {
  const theme = useTheme();
  const Icon = ActivityTypeIcons[activity.title as ActivityType];
  const date = new Date(activity.createdAt);
  const result = formatDistanceToNow(date, { addSuffix: true });

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ display: "none" }}
      ></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          sx={{ color: theme.palette.text.secondary }}
        >
          {Icon && <Icon />}
        </TimelineDot>
        {!isLast && <TimelineConnector sx={{ height: theme.spacing(3) }} />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{activity.title}</Typography>
        <Typography
          sx={{ fontSize: "12px", color: theme.palette.text.secondary }}
        >
          {result}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ActivityItem;
