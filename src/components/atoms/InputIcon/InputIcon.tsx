import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import type { TextFieldProps } from "@mui/material";
import { StyledTextField } from "../Input/styles.ts";

const InputIcon: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      id="input-with-icon-textfield"
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default InputIcon;
