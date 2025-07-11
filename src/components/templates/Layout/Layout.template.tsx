import React from "react";
import { Outlet } from "react-router";
import Header from "../../organisms/Header/Header.tsx";
import Sidebar from "../../organisms/Sidebar/Sidebar.tsx";
import PageTemplate from "../Page/Page.template.tsx";

const LayoutTemplate: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <PageTemplate>
        <main>
          <Outlet />
        </main>
      </PageTemplate>
    </>
  );
};

export default LayoutTemplate;
