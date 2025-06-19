import { Box, styled } from "@mui/material";

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "320px",
  paddingTop: theme.spacing(8),
  paddingLeft: theme.spacing(4),
}));
