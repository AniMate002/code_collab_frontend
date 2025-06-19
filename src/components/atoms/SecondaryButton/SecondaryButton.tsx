import React from "react";
import type { ButtonProps } from "@mui/material/Button";
import { StyledButton } from "./styles.ts";

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton variant={"outlined"} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default SecondaryButton;
