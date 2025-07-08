import React from "react";
import Title from "../../atoms/Title/Title";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { Box, useTheme } from "@mui/material";
import { HomeMainAdvantages } from "../../../constants/home.const.ts";
import HomeMainItem from "./HomeMainItem.tsx";

const HomeMain: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Title
        sx={{
          fontSize: "34px",
          textAlign: "center",
          widths: "100%",
          display: "block",
          margin: "0 auto",
        }}
      >
        Why CodeCollab?
      </Title>
      <SecondaryText
        sx={{
          width: "600px",
          marginTop: theme.spacing(2),
          textAlign: "center",
          widths: "100%",
          display: "block",
          margin: "0 auto",
        }}
      >
        CodeCollab is the perfect place for developers to connect, collaborate,
        and build amazing things together. Here's why:
      </SecondaryText>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: theme.spacing(2),
          marginTop: theme.spacing(4),
          width: "100%",
        }}
      >
        {HomeMainAdvantages.map((advantage) => (
          <HomeMainItem key={advantage.title} {...advantage} />
        ))}
      </Box>
    </>
  );
};

export default HomeMain;
