import { Box, styled } from "@mui/material";

export const AuthTemplateWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: theme.spacing(4),
}));
