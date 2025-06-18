import React from "react";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { Link } from "@mui/material";
import { RouterPaths } from "../../../router/paths.tsx";

interface ChangeAuthModeLabelProps {
  mode: "login" | "signup";
}

const ChangeAuthModeLabel: React.FC<ChangeAuthModeLabelProps> = ({ mode }) => {
  return (
    <>
      {mode === "login" ? (
        <SecondaryText>
          Don't have an account? <Link href={RouterPaths.SIGNUP}>Signup</Link>
        </SecondaryText>
      ) : (
        <SecondaryText>
          Already have an account? <Link href={RouterPaths.LOGIN}>Login</Link>
        </SecondaryText>
      )}
    </>
  );
};

export default ChangeAuthModeLabel;
