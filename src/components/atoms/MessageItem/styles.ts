import { Box, styled } from "@mui/material";

export const MessageItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  gap: theme.spacing(2),
}));

export const MessageBodyWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  fontSize: "14px",
}));
