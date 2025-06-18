import React from "react";
import { AuthTemplateWrapper } from "./styles.ts";
import Title from "../../atoms/Title/Title.tsx";
import LoginForm from "../../organisms/LoginForm/LoginForm.tsx";
import ChangeAuthModeLabel from "../../molecules/ChangeAuthModeLabel/ChangeAuthModeLabel.tsx";

type AuthTemplateProps = {
  mode: "login" | "signup";
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ mode }) => {
  return (
    <AuthTemplateWrapper>
      {mode === "login" ? <Title>Welcome back</Title> : <Title>Signup</Title>}
      {mode === "login" ? <LoginForm /> : null}
      <ChangeAuthModeLabel mode={mode} />
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;
