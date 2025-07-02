import React from "react";
import Title from "../../../atoms/Title/Title";
import { UpdateProfileSpecializationSelectorsWrapper } from "./styles.ts";
import { UserSpecializations } from "../../../../constants/user.const.ts";
import { RoomTopicSelectorWrapper } from "../../Explore/Rooms/styles.ts";
import { useTheme } from "@mui/material";

interface UpdateProfileSpecializationSelectorProps {
  selectedSpecialization: string;
  setSelectedSpecialization: (specialization: string) => void;
}

const UpdateProfileSpecializationSelector: React.FC<
  UpdateProfileSpecializationSelectorProps
> = ({ selectedSpecialization, setSelectedSpecialization }) => {
  const theme = useTheme();
  const renderedSpecializationSelectors = (
    Object.keys(UserSpecializations) as Array<keyof typeof UserSpecializations>
  )
    .filter((specialization) => specialization !== "ALL")
    .map((specialization) => (
      <RoomTopicSelectorWrapper
        key={specialization}
        onClick={() =>
          setSelectedSpecialization(UserSpecializations[specialization])
        }
        sx={{
          color:
            selectedSpecialization === UserSpecializations[specialization]
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
          backgroundColor:
            selectedSpecialization === UserSpecializations[specialization]
              ? theme.palette.primary.light
              : theme.palette.secondary.main,
        }}
      >
        {specialization}
      </RoomTopicSelectorWrapper>
    ));
  return (
    <>
      <Title sx={{ fontSize: "24px" }}>Specialization</Title>
      <UpdateProfileSpecializationSelectorsWrapper>
        {renderedSpecializationSelectors}
      </UpdateProfileSpecializationSelectorsWrapper>
    </>
  );
};

export default UpdateProfileSpecializationSelector;
