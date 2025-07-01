export const UserSpecializations = {
  ["ALL"]: "",
  ["Software Engineer"]: "Software Engineer",
  ["Data Scientist"]: "Data Scientist",
  ["Business Analyst"]: "Business Analyst",
  ["Designer"]: "Designer",
  ["Project Manager"]: "Project Manager",
  ["Front-End Developer"]: "Front-End Developer",
  ["Back-End Developer"]: "Back-End Developer",
  ["Full Stack Developer"]: "Full Stack Developer",
  ["QA Engineer"]: "QA Engineer",
  ["Dev-Ops Engineer"]: "Dev-Ops Engineer",
  ["Guest"]: "Guest",
} as const;

export type UserSpecialization =
  (typeof UserSpecializations)[keyof typeof UserSpecializations];
