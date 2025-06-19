import { Box, styled } from "@mui/material";

export const IsAuthHeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "200px",
  gap: theme.spacing(1),
}));
