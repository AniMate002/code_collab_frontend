import React from "react";
import SkillItem from "../../../atoms/SkillItem/SkillItem.tsx";
import { ProfileSkillsWrapper } from "./styles.ts";
import { Box, Typography, useTheme } from "@mui/material";
import Title from "../../../atoms/Title/Title.tsx";

interface ProfileSkillsProps {
  skills: string[];
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills }) => {
  const theme = useTheme();
  const renderedSkills = skills.map((skill) => <SkillItem skill={skill} />);
  return (
    <Box sx={{ marginTop: theme.spacing(3) }}>
      <Title sx={{ marginBottom: theme.spacing(2) }}>Skills</Title>
      {!skills || skills.length === 0 ? (
        <Typography sx={{ color: theme.palette.text.secondary }}>
          No skills
        </Typography>
      ) : (
        <ProfileSkillsWrapper>{renderedSkills}</ProfileSkillsWrapper>
      )}
    </Box>
  );
};

export default ProfileSkills;
