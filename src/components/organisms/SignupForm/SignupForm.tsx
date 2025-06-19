import React from "react";
import { AuthFormWrapper } from "../../templates/Auth/AuthFormWrapper.template.tsx";
import Input from "../../atoms/Input/Input.tsx";
import Button from "../../atoms/Button/Button.tsx";

const SignupForm: React.FC = () => {
  return (
    <AuthFormWrapper>
      <Input label={"Name"} />
      <Input label={"Email"} type={"email"} />
      <Input label={"Password"} type={"password"} />
      <Input label={"Confirm password"} type={"password"} />
      <Button>Continue</Button>
    </AuthFormWrapper>
  );
};

export default SignupForm;
