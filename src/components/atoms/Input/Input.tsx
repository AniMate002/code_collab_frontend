import React from "react";
import { type TextFieldProps } from "@mui/material";
import { StyledTextField } from "./styles.ts";

const Input: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} variant={"outlined"} />;
};

export default Input;
