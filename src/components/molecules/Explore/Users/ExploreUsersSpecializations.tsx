import React, { useState } from "react";
import Title from "../../../atoms/Title/Title";
import { useTheme } from "@mui/material";
import ExploreUserSpecializationSelectors from "./ExploreUserSpecializationSelectors.tsx";
import {
  type UserSpecialization,
  UserSpecializations,
} from "../../../../constants/user.const.ts";
import { useGetUsersBySpecializationQuery } from "../../../../store/api/user.api.ts";
import UserGrid from "../../UserGrid/UserGrid.tsx";
import { UserGridModes } from "../../../../types/user.types.ts";

const ExploreUsersSpecializations: React.FC = () => {
  const [selectedSpecializations, setSelectedSpecializations] =
    useState<UserSpecialization>(UserSpecializations.ALL);
  const theme = useTheme();

  const { data: users, isLoading } = useGetUsersBySpecializationQuery(
    selectedSpecializations,
  );
  return (
    <>
      <Title
        sx={{ marginBottom: theme.spacing(2), marginTop: theme.spacing(4) }}
      >
        Specializations
      </Title>
      <ExploreUserSpecializationSelectors
        selectedSpecializations={selectedSpecializations}
        setSelectedSpecializations={setSelectedSpecializations}
      />
      <UserGrid
        users={users || []}
        isLoading={isLoading}
        mode={UserGridModes.FULL}
      />
    </>
  );
};

export default ExploreUsersSpecializations;
