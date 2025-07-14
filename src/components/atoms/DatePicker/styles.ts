import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  border: "none",
  outline: "none",
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-root": {
    border: "none",
    outline: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "& .MuiInputBase-input": {
    border: "none",
  },
  "& fieldset": {
    border: "none",
  },
}));
