import { Avatar, Box, styled } from "@mui/material";

export const UpdateProfileSpecializationSelectorsWrapper = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    width: "100%",
    flexWrap: "wrap",
  }),
);

export const StyledUpdateProfileAvatarPicker = styled(Avatar)(() => ({
  transition: "opacity 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.6,
  },
}));
