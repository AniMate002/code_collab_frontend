import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  textColor: theme.palette.primary.contrastText,
  borderRadius: "24px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  justifyContent: "center",
  textTransform: "none",
  maxHeight: "100%",
  height: "50px",
  fontSize: "16px",
  fontWeight: theme.typography.fontWeightBold,
}));
