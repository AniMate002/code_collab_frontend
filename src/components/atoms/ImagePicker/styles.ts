import { Box, styled } from "@mui/material";

export const UploadWrapper = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: "200px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  cursor: "pointer",
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 0.8,
  },
}));
