import { Avatar, Box, styled, Typography } from "@mui/material";
import { NavLink } from "react-router";
import Button from "../Button/Button.tsx";

export const NotificationItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  width: "100%",
  height: "50px",
}));

export const NotificationItemIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  height: "100%",
  width: "50px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
}));

export const NotificationItemContentWrapper = styled(Box)(() => ({}));

export const NotificationItemTitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flexWrap: "wrap",
}));

export const NotificationItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: theme.typography.fontWeightMedium,
}));

export const NotificationItemRoomAvatar = styled(Avatar)(() => ({
  height: "25px",
  width: "25px",
}));

export const NotificationItemRoomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
}));

export const NotificationItemRoomWrapper = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  textDecoration: "none",
}));

export const NotificationItemSecondaryText = styled(Typography)(
  ({ theme }) => ({
    fontSize: "12px",
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
  }),
);

export const NotificationItemSecondaryWrapper = styled(NavLink)(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    textDecoration: "none",
  }),
);

export const NotificationItemSecondaryAvatar = styled(Avatar)(() => ({
  height: "25px",
  width: "25px",
}));

export const NotificationItemRightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginLeft: "auto",
  gap: theme.spacing(1),
}));

export const NotificationItemPrimaryBtn = styled(Button)(({ theme }) => ({
  width: "fit-content",
  padding: theme.spacing(1, 3),
  fontSize: "16px",
}));

export const NotificationItemSecondaryBtn = styled(NotificationItemPrimaryBtn)(
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }),
);
