import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export const NotificationTypes = {
  INVITATION: "invitation",
  REQUEST: "request",
  REQUEST_ACCEPTED: "requestAccepted",
  REQUEST_REJECTED: "requestRejected",
  FOLLOW: "follow",
  INVITATION_ACCEPTED: "invitationAccepted",
  INVITATION_REJECTED: "invitationRejected",
} as const;

export type NotificationType =
  (typeof NotificationTypes)[keyof typeof NotificationTypes];

export const NotificationTypeIcons = {
  [NotificationTypes.INVITATION]: ForwardToInboxIcon,
  [NotificationTypes.REQUEST]: CallMergeIcon,
  [NotificationTypes.REQUEST_ACCEPTED]: DoneAllIcon,
  [NotificationTypes.REQUEST_REJECTED]: HighlightOffIcon,
  [NotificationTypes.FOLLOW]: PersonAddAltIcon,
  [NotificationTypes.INVITATION_ACCEPTED]: SwipeRightAltIcon,
  [NotificationTypes.INVITATION_REJECTED]: ThumbDownOffAltIcon,
};

export const NotificationTypeTitles = {
  [NotificationTypes.INVITATION]: "Someone invited you to join a room",
  [NotificationTypes.REQUEST]: "Someone requested to join a room",
  [NotificationTypes.REQUEST_ACCEPTED]:
    "Request to join a room was accepted by admin",
  [NotificationTypes.REQUEST_REJECTED]:
    "Request to join a room was rejected by admin",
  [NotificationTypes.FOLLOW]: "Someone followed you",
  [NotificationTypes.INVITATION_ACCEPTED]:
    "You accepted an invitation to join a room",
  [NotificationTypes.INVITATION_REJECTED]:
    "You rejected an invitation to join a room",
};
