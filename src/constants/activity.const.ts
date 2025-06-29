import AttachFileIcon from "@mui/icons-material/AttachFile";
import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import SendIcon from "@mui/icons-material/Send";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CheckIcon from "@mui/icons-material/Check";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export const ActivityTypes = {
  createFile: "Created file",
  createLink: "Created link",
  createRoom: "Created room",
  deleteLink: "Deleted link",
  sendInvite: "Sent invite",
  acceptInvite: "Accepted invite",
  rejectInvite: "Rejected invite",
  leaveRoom: "Left room",
  joinRoom: "Joined room",
  createTask: "Created task",
  updateTaskStatus: "Updated task status",
  requestRoom: "Requested access to this room",
  requestRejected: "Request rejected",
} as const;

export type ActivityType = (typeof ActivityTypes)[keyof typeof ActivityTypes];

export const ActivityTypeIcons = {
  [ActivityTypes.createFile]: AttachFileIcon,
  [ActivityTypes.createLink]: LinkIcon,
  [ActivityTypes.createRoom]: RemoveFromQueueIcon,
  [ActivityTypes.deleteLink]: LinkOffIcon,
  [ActivityTypes.sendInvite]: SendIcon,
  [ActivityTypes.acceptInvite]: SendAndArchiveIcon,
  [ActivityTypes.rejectInvite]: CancelScheduleSendIcon,
  [ActivityTypes.leaveRoom]: ExitToAppIcon,
  [ActivityTypes.joinRoom]: CheckIcon,
  [ActivityTypes.createTask]: PlaylistAddIcon,
  [ActivityTypes.updateTaskStatus]: AutorenewIcon,
  [ActivityTypes.requestRoom]: SensorOccupiedIcon,
  [ActivityTypes.requestRejected]: ThumbDownAltIcon,
};
