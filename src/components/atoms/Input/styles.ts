import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputLabel-root": {
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "1px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));
