import { Box, styled } from "@mui/material";

export const RoomTasksGridWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "space-between",
}));

export const RoomTasksCreateTaskModalContributorSelectorWrapper = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    width: "100%",
    flexWrap: "wrap",
  }),
);
