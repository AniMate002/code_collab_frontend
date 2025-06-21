import React from "react";
import { IsAuthHeaderWrapper } from "./styles.ts";
import Button from "../../atoms/Button/Button.tsx";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";

const IsNotAuthHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <IsAuthHeaderWrapper>
      <Button onClick={() => navigate(RouterPaths.LOGIN)}>Login</Button>
      <SecondaryButton onClick={() => navigate(RouterPaths.SIGNUP)}>
        Signup
      </SecondaryButton>
    </IsAuthHeaderWrapper>
  );
};

export default IsNotAuthHeader;
