import { Box, styled } from "@mui/material";

export const UpdateProfileFormSideWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  flexShrink: 0,
  flexWrap: "wrap",
}));
export const UpdateProfileFormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: theme.spacing(4),
}));
