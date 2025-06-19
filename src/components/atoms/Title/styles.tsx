import { styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.common.white,
}));
