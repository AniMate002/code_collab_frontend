import { Box, styled } from "@mui/material";
import { CreateLinkModalWrapper } from "../../../LinkTable/styles.ts";

export const RoomInvitationModalWrapper = styled(CreateLinkModalWrapper)();

export const UserSelectInvitationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  width: "100%",
  flexWrap: "wrap",
}));
