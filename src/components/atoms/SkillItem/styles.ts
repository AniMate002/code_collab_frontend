import { Box, styled } from "@mui/material";

export const SkillItemWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "10px 20px",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
}));
