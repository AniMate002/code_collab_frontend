import React from "react";
import { SkillItemWrapper } from "./styles.ts";

interface SkillItemProps {
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return <SkillItemWrapper>{skill}</SkillItemWrapper>;
};

export default SkillItem;
