import { Box, styled } from "@mui/material";

export const LoginFormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
  width: "450px",
}));
