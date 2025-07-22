import React from "react";
import { Box, useTheme } from "@mui/material";
import SecondaryText from "../../../atoms/SecondaryText/SecondaryText.tsx";
import TabHeader from "../../TabHeader/TabHeader.tsx";

interface ProfileAboutProps {
  about: string;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ about }) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: theme.spacing(4) }}>
      <TabHeader title="About" showButton={false} />
      <SecondaryText>{about ? about : "No about"}</SecondaryText>
    </Box>
  );
};

export default ProfileAbout;
