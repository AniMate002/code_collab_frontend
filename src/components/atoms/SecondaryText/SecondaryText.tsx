import React from "react";
import type { TypographyProps } from "@mui/material";
import { StyledTypography } from "./styles.tsx";

const SecondaryText: React.FC<TypographyProps> = (props) => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};

export default SecondaryText;
