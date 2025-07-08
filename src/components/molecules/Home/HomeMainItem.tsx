import React from "react";
import { Typography, useTheme } from "@mui/material";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import type { HomeMainAdvantage } from "../../../types/home.types.ts";
import { HomeMainItemWrapper } from "./styles.ts";

const HomeMainItem: React.FC<HomeMainAdvantage> = ({
  Icon,
  title,
  description,
}) => {
  const theme = useTheme();
  return (
    <HomeMainItemWrapper>
      <Icon />
      <Typography sx={{ fontWeight: theme.typography.fontWeightBold }}>
        {title}
      </Typography>
      <SecondaryText sx={{ fontSize: "12px" }}>{description}</SecondaryText>
    </HomeMainItemWrapper>
  );
};

export default HomeMainItem;
