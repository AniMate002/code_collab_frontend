import { Box, styled } from "@mui/material";

export const UserGridWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  width: "100%",
  flexWrap: "wrap",
  alignItems: "center",
}));
