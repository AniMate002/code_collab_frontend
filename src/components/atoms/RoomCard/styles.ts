import { Box, styled, Typography } from "@mui/material";

export const RoomCardWrapper = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const RoomImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "250px",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));

export const RoomTitleWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: "16px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

export const RoomDescriptionWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightLight,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

export const RoomTopicWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "24px",
  padding: "4px 12px",
  display: "block",
  width: "fit-content",
}));
