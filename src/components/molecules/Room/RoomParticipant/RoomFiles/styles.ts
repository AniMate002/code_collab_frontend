import { Box, styled } from "@mui/material";

export const RoomFilesUploadSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  border: "1px dashed rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  minHeight: "180px",
}));
