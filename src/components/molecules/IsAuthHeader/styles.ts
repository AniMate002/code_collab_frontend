import { styled } from "@mui/material";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";

export const HeaderNameWrapper = styled(SecondaryText)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "16px",
}));
