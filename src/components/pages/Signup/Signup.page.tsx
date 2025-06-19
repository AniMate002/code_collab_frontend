import React from "react";
import AuthTemplate from "../../templates/Auth/Auth.template.tsx";
import { AuthMode } from "../../../constants/auth.const.ts";

const SignupPage: React.FC = () => {
  return <AuthTemplate mode={AuthMode.SIGNUP} />;
};

export default SignupPage;
