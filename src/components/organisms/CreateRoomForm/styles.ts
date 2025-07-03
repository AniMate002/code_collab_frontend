import { Box, styled } from "@mui/material";

export const CreateRoomFormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "400px",
  marginTop: theme.spacing(4),
}));
