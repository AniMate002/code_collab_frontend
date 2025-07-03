import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";

interface SelectProps {
  data: Record<string, string>;
  label: string;
  value: string;
  onChange: any;
}

const MySelect: React.FC<SelectProps> = ({ data, label, value, onChange }) => {
  const theme = useTheme();
  const renderedOptions = Object.entries(data).map(([value, label]) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{ backgroundColor: theme.palette.secondary.main }}
        label={label}
        value={value}
        onChange={onChange}
      >
        {renderedOptions}
      </Select>
    </FormControl>
  );
};

export default MySelect;
