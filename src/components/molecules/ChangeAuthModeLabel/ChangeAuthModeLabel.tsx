import React from "react";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { Link } from "@mui/material";
import { RouterPaths } from "../../../router/paths.tsx";
import { AuthMode } from "../../../constants/auth.const.ts";

interface ChangeAuthModeLabelProps {
  mode: AuthMode;
}

const ChangeAuthModeLabel: React.FC<ChangeAuthModeLabelProps> = ({ mode }) => {
  return (
    <>
      {mode === AuthMode.LOGIN ? (
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
