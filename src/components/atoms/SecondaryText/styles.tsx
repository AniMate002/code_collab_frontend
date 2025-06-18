import { styled, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
}));
