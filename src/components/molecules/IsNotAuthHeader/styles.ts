import { Box, styled } from "@mui/material";

export const IsAuthHeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "50vw",
  gap: theme.spacing(1),
}));
