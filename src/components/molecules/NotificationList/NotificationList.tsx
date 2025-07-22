import React from "react";
import type { Notification } from "../../../types/notification.type.ts";
import { NotificationListWrapper } from "./styles.ts";
import NotificationItem from "../../atoms/NotificationItem/NotificationItem.tsx";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { Skeleton } from "@mui/material";

interface NotificationListProps {
  notifications: Notification[];
  isLoading: boolean;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  isLoading,
}) => {
  const renderedNotifications = notifications.map((notification) => (
    <NotificationItem
      notification={notification}
      key={notification._id.toString()}
    />
  ));
  if (isLoading) return <NotificationListSkeleton />;

  if (!isLoading && notifications && notifications.length === 0)
    return <SecondaryText>No notifications</SecondaryText>;

  return (
    <NotificationListWrapper>{renderedNotifications}</NotificationListWrapper>
  );
};

const NotificationListSkeleton = () => {
  return (
    <NotificationListWrapper>
      <Skeleton variant="rounded" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
    </NotificationListWrapper>
  );
};

export default NotificationList;
