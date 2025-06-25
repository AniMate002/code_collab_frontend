import React from "react";
import { PageTemplateWrapper } from "./styles.ts";

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
};

export default PageTemplate;
