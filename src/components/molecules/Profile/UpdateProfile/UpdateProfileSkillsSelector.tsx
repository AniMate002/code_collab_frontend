import React, { useState } from "react";
import Title from "../../../atoms/Title/Title";
import SecondaryText from "../../../atoms/SecondaryText/SecondaryText.tsx";
import { RoomTopicSelectorWrapper } from "../../Explore/Rooms/styles.ts";
import Input from "../../../atoms/Input/Input.tsx";
import Button from "../../../atoms/Button/Button.tsx";
import { Toast } from "../../../atoms/Toast/Toast.ts";
import { UpdateProfileSpecializationSelectorsWrapper } from "./styles.ts";

interface UpdateProfileSkillsSelectorProps {
  skills: string[];
  setSkills: (skill: string[]) => void;
}

const UpdateProfileSkillsSelector: React.FC<
  UpdateProfileSkillsSelectorProps
> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState("");
  const renderedSkills =
    skills.length === 0 ? (
      <SecondaryText>No skills</SecondaryText>
    ) : (
      skills.map((skill) => (
        <RoomTopicSelectorWrapper
          key={skill}
          onClick={() => handleRemoveSkill(skill)}
        >
          {skill}
        </RoomTopicSelectorWrapper>
      ))
    );

  const handleAddNewSkill = () => {
    if (!newSkill.trim()) return;
    if (skills.includes(newSkill.trim()))
      return Toast.fire({
        icon: "warning",
        title: "Skill already added",
      });
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <UpdateProfileSpecializationSelectorsWrapper>
      <Title sx={{ fontSize: "24px" }}>Skills</Title>
      <Input
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        label={"Add skill"}
      />
      <Button disabled={!newSkill.trim()} onClick={handleAddNewSkill}>
        Add+
      </Button>
      {renderedSkills}
    </UpdateProfileSpecializationSelectorsWrapper>
  );
};

export default UpdateProfileSkillsSelector;
