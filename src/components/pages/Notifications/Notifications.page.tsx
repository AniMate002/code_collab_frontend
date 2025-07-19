import React from "react";
import NotificationsTemplate from "../../templates/Notifications/Notifications.template.tsx";
import { useGetAuthUserNotificationsQuery } from "../../../store/api/notification.api.ts";

const NotificationsPage: React.FC = () => {
  const { data: notifications, isLoading } = useGetAuthUserNotificationsQuery();
  return (
    <NotificationsTemplate
      notifications={notifications || []}
      isLoading={isLoading}
    />
  );
};

export default NotificationsPage;
