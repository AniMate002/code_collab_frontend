import React from "react";
import type { Notification } from "../../../types/notification.type.ts";
import {
  NotificationItemContentWrapper,
  NotificationItemIconWrapper,
  NotificationItemPrimaryBtn,
  NotificationItemRightSection,
  NotificationItemRoomAvatar,
  NotificationItemRoomTitle,
  NotificationItemRoomWrapper,
  NotificationItemSecondaryAvatar,
  NotificationItemSecondaryBtn,
  NotificationItemSecondaryText,
  NotificationItemSecondaryWrapper,
  NotificationItemTitle,
  NotificationItemTitleWrapper,
  NotificationItemWrapper,
} from "./styles.ts";
import {
  NotificationTypeIcons,
  NotificationTypes,
  NotificationTypeTitles,
} from "../../../constants/notification.const.ts";
import { RouterPaths } from "../../../router/paths.tsx";
import {
  useAcceptInvitationMutation,
  useAcceptRequestMutation,
  useRejectNotificationMutation,
  useRejectRequestMutation,
} from "../../../store/api/notification.api.ts";
import { Toast } from "../Toast/Toast.ts";

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const [acceptRequest, { isLoading: isLoadingAcceptRequest }] =
    useAcceptRequestMutation();
  const [rejectRequest, { isLoading: isLoadingRejectRequest }] =
    useRejectRequestMutation();
  const [acceptInvitation, { isLoading: isLoadingAcceptInvitation }] =
    useAcceptInvitationMutation();
  const [rejectInvitation, { isLoading: isLoadingRejectInvitation }] =
    useRejectNotificationMutation();
  const Icon = NotificationTypeIcons[notification.type];
  const title = NotificationTypeTitles[notification.type];
  const handleClickAcceptNotification = async () => {
    try {
      if (notification.type === NotificationTypes.INVITATION) {
        await acceptInvitation({
          notificationId: notification._id.toString(),
        }).unwrap();
      } else if (notification.type === NotificationTypes.REQUEST) {
        await acceptRequest({
          notificationId: notification._id.toString(),
        }).unwrap();
      }
      await Toast.fire({
        icon: "success",
        title: `${notification.type === NotificationTypes.REQUEST ? "Request" : "Invitation"} accepted`,
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };

  const handleClickRejectNotification = async () => {
    try {
      if (notification.type === NotificationTypes.INVITATION) {
        await rejectInvitation({
          notificationId: notification._id.toString(),
        }).unwrap();
      } else if (notification.type === NotificationTypes.REQUEST) {
        await rejectRequest({
          notificationId: notification._id.toString(),
        }).unwrap();
      }
      await Toast.fire({
        icon: "info",
        title: `${notification.type === NotificationTypes.REQUEST ? "Request" : "Invitation"} rejected`,
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  const wrapperUnreadNotificationStyles = !notification.isRead
    ? {
        borderLeft: "2px solid",
        borderColor: "#0A80ED",
        borderRadius: "12px",
      }
    : null;
  return (
    <NotificationItemWrapper sx={wrapperUnreadNotificationStyles}>
      <NotificationItemIconWrapper>
        <Icon sx={{ fontSize: "24px" }} />
      </NotificationItemIconWrapper>
      <NotificationItemContentWrapper>
        <NotificationItemTitleWrapper>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          {notification.room && (
            <NotificationItemRoomWrapper
              to={RouterPaths.ROOM(notification?.room?._id?.toString() || "")}
            >
              <NotificationItemRoomAvatar
                src={notification.room.image}
                alt={notification.room.title}
              />
              <NotificationItemRoomTitle>
                {notification.room.title}
              </NotificationItemRoomTitle>
            </NotificationItemRoomWrapper>
          )}
        </NotificationItemTitleWrapper>
        <NotificationItemSecondaryWrapper
          to={RouterPaths.PROFILE(notification?.from?._id?.toString() || "")}
        >
          <NotificationItemSecondaryText>By:</NotificationItemSecondaryText>
          <NotificationItemSecondaryAvatar
            src={notification.from.avatar}
            alt={notification.from.name}
          />
          <NotificationItemSecondaryText>
            {notification.from.name}
          </NotificationItemSecondaryText>
        </NotificationItemSecondaryWrapper>
      </NotificationItemContentWrapper>
      <NotificationItemRightSection>
        {(notification.type === "invitation" ||
          notification.type === "request") &&
          !notification.isResolved && (
            <>
              <NotificationItemPrimaryBtn
                loading={
                  isLoadingAcceptRequest ||
                  isLoadingRejectRequest ||
                  isLoadingAcceptInvitation ||
                  isLoadingRejectInvitation
                }
                onClick={handleClickAcceptNotification}
              >
                Accept
              </NotificationItemPrimaryBtn>
              <NotificationItemSecondaryBtn
                loading={
                  isLoadingRejectRequest ||
                  isLoadingAcceptRequest ||
                  isLoadingAcceptInvitation ||
                  isLoadingRejectInvitation
                }
                onClick={handleClickRejectNotification}
              >
                Reject
              </NotificationItemSecondaryBtn>
            </>
          )}
      </NotificationItemRightSection>
    </NotificationItemWrapper>
  );
};

export default NotificationItem;
