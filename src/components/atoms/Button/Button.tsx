import React from "react";
import { type ButtonProps } from "@mui/material/Button";
import { StyledButton } from "./styles.tsx";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton variant={"contained"} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
