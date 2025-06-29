import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const UserCardCompactWrapper = styled(NavLink)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: theme.spacing(2),
  width: "220px",
  height: "65px",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
