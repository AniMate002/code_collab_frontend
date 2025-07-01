import { Box, Button, styled } from "@mui/material";

export const RoomTopicSelectorsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
}));

export const RoomTopicSelectorWrapper = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "8px 25px",
  backgroundColor: theme.palette.secondary.main,
  width: "fit-content",
  borderRadius: "16px",
  fontSize: "12px",
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "capitalize",
}));
