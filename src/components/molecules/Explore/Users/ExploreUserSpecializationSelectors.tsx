import React from "react";
import {
  type UserSpecialization,
  UserSpecializations,
} from "../../../../constants/user.const.ts";
import {
  RoomTopicSelectorWrapper,
  RoomTopicSelectorsWrapper,
} from "../Rooms/styles.ts";
import { useTheme } from "@mui/material";

interface ExploreUserSpecializationSelectorsProps {
  selectedSpecializations: UserSpecialization;
  setSelectedSpecializations: React.Dispatch<
    React.SetStateAction<UserSpecialization>
  >;
}

const ExploreUserSpecializationSelectors: React.FC<
  ExploreUserSpecializationSelectorsProps
> = ({ selectedSpecializations, setSelectedSpecializations }) => {
  const theme = useTheme();
  const renderedSpecializations = (
    Object.keys(UserSpecializations) as Array<keyof typeof UserSpecializations>
  ).map((specialization) => (
    <RoomTopicSelectorWrapper
      key={specialization}
      onClick={() =>
        setSelectedSpecializations(UserSpecializations[specialization])
      }
      sx={{
        color:
          selectedSpecializations === UserSpecializations[specialization]
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary,
        backgroundColor:
          selectedSpecializations === UserSpecializations[specialization]
            ? theme.palette.primary.light
            : theme.palette.secondary.main,
        marginRight: "10px",
      }}
    >
      {specialization}
    </RoomTopicSelectorWrapper>
  ));
  return (
    <RoomTopicSelectorsWrapper>
      {renderedSpecializations}
    </RoomTopicSelectorsWrapper>
  );
};

export default ExploreUserSpecializationSelectors;
