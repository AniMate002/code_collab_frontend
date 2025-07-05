import { Box, styled } from "@mui/material";

export const RoomNotParticipantLayoutWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const RoomNotParticipantHeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));
