import React from "react";
import {
  type DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StyledDatePicker } from "./styles.ts";

const DatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker {...props} />
    </LocalizationProvider>
  );
};

export default DatePicker;
