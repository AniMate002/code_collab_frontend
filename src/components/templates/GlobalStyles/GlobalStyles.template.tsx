import React from "react";
import { GlobalStyles } from "@mui/material";

const GlobalStylesTemplate: React.FC = () => {
  // TODO: add max width of 1300px for inner content
  return (
    <GlobalStyles
      styles={{
        "html, body, #root": {
          margin: 0,
          padding: 0,
          height: "100vh",
          horizontalOverflow: "hidden",
          verticalOverflow: "scroll",
          backgroundColor: "#121417", // или твой основной фон
          boxSizing: "border-box",
        },
        "*": {
          boxSizing: "inherit",
        },
      }}
    />
  );
};

export default GlobalStylesTemplate;
