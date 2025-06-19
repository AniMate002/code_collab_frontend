import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 50px",
  borderBottom: "2px solid",
  borderBottomColor: theme.palette.secondary.main,
  position: "sticky",
}));
