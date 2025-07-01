import { Box, styled } from "@mui/material";

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  zIndex: 50,
  left: 0,
  top: 0,
  display: "flex",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "400px",
  height: "100vh",
  paddingLeft: theme.spacing(4),
}));
