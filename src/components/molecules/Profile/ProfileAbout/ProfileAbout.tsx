import React from "react";
import { Box, useTheme } from "@mui/material";
import Title from "../../../atoms/Title/Title";
import SecondaryText from "../../../atoms/SecondaryText/SecondaryText.tsx";

interface ProfileAboutProps {
  about: string;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ about }) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: theme.spacing(4) }}>
      <Title sx={{ marginBottom: theme.spacing(1) }}>About</Title>
      <SecondaryText>{about ? about : "No about"}</SecondaryText>
    </Box>
  );
};

export default ProfileAbout;
