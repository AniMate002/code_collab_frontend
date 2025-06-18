import React from "react";
import { AppRoutes } from "./router.tsx";
import { Route, Routes } from "react-router";

const AppRouter: React.FC = () => {
  const renderedRoutes = AppRoutes.map((route) => (
    <Route path={route.path} element={<route.element />} />
  ));
  return <Routes>{renderedRoutes}</Routes>;
};

export default AppRouter;
