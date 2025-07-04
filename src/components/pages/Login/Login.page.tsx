import React from "react";
import AuthTemplate from "../../templates/Auth/Auth.template.tsx";
import { AuthMode } from "../../../constants/auth.const.ts";

const LoginPage: React.FC = () => {
  return <AuthTemplate mode={AuthMode.LOGIN} />;
};

export default LoginPage;
