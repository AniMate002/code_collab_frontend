import React from "react";
import Searchbar from "../../molecules/Explore/Searchbar.tsx";
import Title from "../../atoms/Title/Title.tsx";
import { useTheme } from "@mui/material";
import { type User, UserGridModes } from "../../../types/user.types.ts";
import UserGrid from "../../molecules/UserGrid/UserGrid.tsx";

interface FollowingTemplateProps {
  isLoading: boolean;
  users: User[];
}

const FollowingTemplate: React.FC<FollowingTemplateProps> = ({
  isLoading,
  users,
}) => {
  const theme = useTheme();
  return (
    <>
      <Searchbar />
      <Title
        sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(2) }}
      >
        Following
      </Title>

      <UserGrid users={users} isLoading={isLoading} mode={UserGridModes.FULL} />
    </>
  );
};

export default FollowingTemplate;
