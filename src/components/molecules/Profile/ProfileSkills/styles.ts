import { Box, styled } from "@mui/material";

export const ProfileSkillsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));
