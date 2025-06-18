import React from "react";
import { GlobalStyles } from "@mui/material";

const GlobalStylesTemplate: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        "html, body, #root": {
          margin: 0,
          padding: 0,
          height: "100%",
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
