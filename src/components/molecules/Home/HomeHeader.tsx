import React from "react";
import { HomeHeaderWrapper } from "./styles.ts";
import Title from "../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";

const HomeHeader: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <HomeHeaderWrapper>
      <Title sx={{ fontSize: "40px" }}>Welcome to CodeCollab</Title>
      <SecondaryText>
        Connect with developers, collaborate on projects, and build amazing
        things together.
      </SecondaryText>
      <Button
        onClick={() => navigate(RouterPaths.EXPLORE)}
        sx={{ width: "200px", marginTop: theme.spacing(2) }}
      >
        Get Started
      </Button>
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;
