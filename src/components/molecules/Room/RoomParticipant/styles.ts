import { Avatar, Box, styled } from "@mui/material";
import Button from "../../../atoms/Button/Button.tsx";
import SecondaryText from "../../../atoms/SecondaryText/SecondaryText.tsx";

export const RoomParticipantHeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(2),
}));

export const RoomParticipantHeaderAvatarWrapper = styled(Avatar)(() => ({
  height: "110px",
  width: "110px",
}));

export const StyledRoomParticipantHeaderLeaveButton = styled(Button)(() => ({
  width: "200px",
  marginLeft: "auto",
}));

export const RoomParticipantHeaderLeaveDescriptionWrapper = styled(
  SecondaryText,
)(() => ({
  fontSize: "14px",
  width: "700px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const RoomParticipantSendMessageFormWrapper = styled("form")(
  ({ theme }) => ({
    bottom: theme.spacing(-28),
    position: "absolute",
    left: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: theme.spacing(2),
  }),
);
