import React from "react";
import { IsAuthHeaderWrapper } from "./styles.ts";
import Button from "../../atoms/Button/Button.tsx";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";

const IsAuthHeader: React.FC = () => {
  return (
    <IsAuthHeaderWrapper>
      <Button>Login</Button>
      <SecondaryButton>Signup</SecondaryButton>
    </IsAuthHeaderWrapper>
  );
};

export default IsAuthHeader;
