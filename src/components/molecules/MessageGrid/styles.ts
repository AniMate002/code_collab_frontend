import { Box, styled } from "@mui/material";

export const MessageGridWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "140%",
  overflow: "auto",
  gap: theme.spacing(2),
}));
