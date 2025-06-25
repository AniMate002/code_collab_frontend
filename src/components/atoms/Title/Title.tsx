import React from "react";
import { type TypographyProps } from "@mui/material";
import { StyledTitle } from "./styles.tsx";

interface TitleProps extends TypographyProps {}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <StyledTitle variant={"h3"} {...props}>
      {props.children}
    </StyledTitle>
  );
};

export default Title;
