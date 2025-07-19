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
  useAcceptRequestMutation,
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
  const Icon = NotificationTypeIcons[notification.type];
  const title = NotificationTypeTitles[notification.type];
  const handleClickAcceptRequest = async () => {
    try {
      await acceptRequest({
        notificationId: notification._id.toString(),
      }).unwrap();
      await Toast.fire({
        icon: "success",
        title: "Request accepted",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };

  const handleClickRejectRequest = async () => {
    try {
      await rejectRequest({
        notificationId: notification._id.toString(),
      }).unwrap();
      await Toast.fire({
        icon: "success",
        title: "Request accepted",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  return (
    <NotificationItemWrapper>
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
        {notification.type === NotificationTypes.REQUEST &&
          !notification.isResolved && (
            <>
              <NotificationItemPrimaryBtn
                loading={isLoadingAcceptRequest}
                onClick={handleClickAcceptRequest}
              >
                Accept
              </NotificationItemPrimaryBtn>
              <NotificationItemSecondaryBtn
                loading={isLoadingRejectRequest}
                onClick={handleClickRejectRequest}
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
