import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router";

export const HomeHeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  backgroundImage: "url('/home.png')",
  backgroundColor: theme.palette.secondary.main,
  overflow: "hidden",
  borderRadius: "12px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(2),
  justifyContent: "end",
  marginBottom: theme.spacing(7),
}));

export const HomeMainItemWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "8px",
  padding: theme.spacing(2),
  width: "300px",
}));

export const HomeFooterWrapper = styled("footer")(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  gap: theme.spacing(4),
  flexWrap: "wrap",
}));

export const HomeFooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: "14px",
}));

export const HomeFooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
  display: "block",
  width: "100%",
  textAlign: "center",
}));
