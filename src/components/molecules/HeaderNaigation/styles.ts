import { Box, styled } from "@mui/material";

export const HeaderNavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyContent: "center",
}));
