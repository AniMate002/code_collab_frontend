import React from "react";
import { TabHeaderWrapper } from "./styles.ts";
import Title from "../../atoms/Title/Title.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { useTheme } from "@mui/material";

type TabHeaderProps =
  | {
      title: string;
      showButton: false;
    }
  | {
      title: string;
      btnLabel: string;
      onClick: any;
      showButton: true;
    };
// TODO: Apply this TabHeader to all tabs in Profile
const TabHeader: React.FC<TabHeaderProps> = (props) => {
  const theme = useTheme();
  return (
    <TabHeaderWrapper>
      <Title>{props.title}</Title>
      {props.showButton && (
        <Button
          sx={{ width: "fit-content", padding: theme.spacing(0, 5) }}
          onClick={props.onClick}
        >
          {props.btnLabel}
        </Button>
      )}
    </TabHeaderWrapper>
  );
};

export default TabHeader;
