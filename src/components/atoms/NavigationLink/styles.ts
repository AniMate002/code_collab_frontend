import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const StyledNavigationLink = styled(NavLink)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "30px 16px",
  height: "40px",
  borderRadius: 40,
  textDecoration: "none",
  gap: theme.spacing(2),
  fontWeight: theme.typography.fontWeightBold,
}));
