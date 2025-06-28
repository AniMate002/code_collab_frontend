import { Box, styled } from "@mui/material";

export const UserCardCompactWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: theme.spacing(2),
  width: "220px",
  height: "65px",
}));
