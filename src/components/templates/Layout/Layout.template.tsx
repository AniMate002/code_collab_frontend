import React from "react";
import { Outlet } from "react-router";
import Header from "../../organisms/Header/Header.tsx";
import Sidebar from "../../organisms/Sidebar/Sidebar.tsx";

const LayoutTemplate: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutTemplate;
