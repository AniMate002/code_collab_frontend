import { Avatar, Box, styled, Typography } from "@mui/material";
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

export const UserCardFullWrapper = styled(NavLink)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "10px 20px",
  flexDirection: "column",
  textDecoration: "none",
  width: "200px",
  height: "270px",
  overflow: "hidden",
}));

export const UserCardFullAvatarWrapper = styled(Avatar)(({ theme }) => ({
  height: "200px",
  width: "200px",
  marginBottom: theme.spacing(1),
}));

export const UserCardFullUsernameWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  textDecoration: "none",
  width: "100%",
  textAlign: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

export const UserCardFullSpecializationWrapper = styled(Typography)(
  ({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "12px",
  }),
);

export const UserSelectItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  width: "70px",
  cursor: "pointer",
}));
