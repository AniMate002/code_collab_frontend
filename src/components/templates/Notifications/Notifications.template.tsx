import React from "react";
import type { Notification } from "../../../types/notification.type.ts";
import Title from "../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";
import NotificationList from "../../molecules/NotificationList/NotificationList.tsx";

interface NotificationsTemplateProps {
  notifications: Notification[];
  isLoading: boolean;
}

const NotificationsTemplate: React.FC<NotificationsTemplateProps> = ({
  notifications,
  isLoading,
}) => {
  const theme = useTheme();
  return (
    <>
      <Title sx={{ marginBottom: theme.spacing(4) }}>Notifications</Title>
      <NotificationList notifications={notifications} isLoading={isLoading} />
    </>
  );
};

export default NotificationsTemplate;
