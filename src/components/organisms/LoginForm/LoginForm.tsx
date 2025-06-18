import React from "react";
import { LoginFormWrapper } from "./styles.tsx";
import Input from "../../atoms/Input/Input.tsx";
import Button from "../../atoms/Button/Button.tsx";

const LoginForm: React.FC = () => {
  return (
    <LoginFormWrapper>
      <Input label={"Email"} type={"email"} />
      <Input label={"Password"} type={"password"} />
      <Button>Continue</Button>
    </LoginFormWrapper>
  );
};

export default LoginForm;
