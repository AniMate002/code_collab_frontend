import React from "react";
import { IOSSwitch } from "./styles.tsx";
import type { SwitchProps } from "@mui/material";

const Switch: React.FC<SwitchProps> = (props) => {
  return <IOSSwitch {...props} />;
};

export default Switch;
