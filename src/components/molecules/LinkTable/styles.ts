import { styled } from "@mui/material";

export const CreateLinkModalWrapper = styled("form")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  width: "70vh",
  border: "2px solid",
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
}));
