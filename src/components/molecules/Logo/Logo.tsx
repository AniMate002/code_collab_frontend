import React from "react";
import Title from "../../atoms/Title/Title.tsx";
import { Link } from "@mui/material";
import { RouterPaths } from "../../../router/paths.tsx";

const Logo: React.FC = () => {
  return (
    <Title>
      <Link
        href={RouterPaths.HOME}
        sx={{ textDecoration: "none", color: "white" }}
      >
        CodeCollab
      </Link>
    </Title>
  );
};

export default Logo;
