import React from "react";
import { Typography, useTheme } from "@mui/material";
import { StyledNavigationLink } from "./styles.ts";
import type { SidebarNavLink } from "../../../constants/sidebar.const.ts";

interface NavigationLink extends SidebarNavLink {}

const NavigationLink: React.FC<NavigationLink> = ({
  href,
  Icon,
  isActive,
  label,
}) => {
  const theme = useTheme();
  return (
    <StyledNavigationLink
      to={href}
      sx={{
        backgroundColor: isActive
          ? theme.palette.secondary.main
          : "transparent",
      }}
    >
      <Icon
        sx={{
          color: theme.palette.primary.main,
          fontSize: theme.typography.pxToRem(32),
        }}
      />
      <Typography
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: theme.typography.pxToRem(16),
        }}
      >
        {label}
      </Typography>
    </StyledNavigationLink>
  );
};

export default NavigationLink;
