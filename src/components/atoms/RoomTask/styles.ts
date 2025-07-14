import { Box, styled } from "@mui/material";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";

export const RoomTaskColumnWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  flex: "1 1 0",
  padding: theme.spacing(2),
  borderRadius: "12px",
  borderTop: "2px solid",
  height: "fit-content",
}));

export const RoomTaskCardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const RoomTaskCardDescriptionWrapper = styled(SecondaryText)(() => ({
  fontSize: "12px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const RoomTaskCardAssignedToWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));
