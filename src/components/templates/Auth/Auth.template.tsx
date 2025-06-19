import React from "react";
import { AuthTemplateWrapper } from "./styles.ts";
import Title from "../../atoms/Title/Title.tsx";
import LoginForm from "../../organisms/LoginForm/LoginForm.tsx";
import ChangeAuthModeLabel from "../../molecules/ChangeAuthModeLabel/ChangeAuthModeLabel.tsx";
import { AuthMode } from "../../../constants/auth.const.ts";
import SignupForm from "../../organisms/SignupForm/SignupForm.tsx";

type AuthTemplateProps = {
  mode: AuthMode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ mode }) => {
  return (
    <AuthTemplateWrapper>
      {mode === AuthMode.LOGIN ? (
        <Title>Welcome back</Title>
      ) : (
        <Title>Create an account</Title>
      )}
      {mode === AuthMode.LOGIN ? <LoginForm /> : <SignupForm />}
      <ChangeAuthModeLabel mode={mode} />
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;
