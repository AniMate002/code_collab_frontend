import { Link, styled } from "@mui/material";

export const StyledNavigationLink = styled(Link)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "30px 16px",
  height: "40px",
  borderRadius: 20,
  textDecoration: "none",
  gap: theme.spacing(2),
  fontWeight: theme.typography.fontWeightBold,
}));
