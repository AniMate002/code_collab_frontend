import React from "react";
import { AppRoutes } from "./router.tsx";
import { Route, Routes } from "react-router";
import { RouterPaths } from "./paths.tsx";
import LayoutTemplate from "../components/templates/Layout/Layout.template.tsx";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => {
        if (route.skipLayout)
          return <Route path={route.path} element={<route.element />} />;
      })}

      <Route path={RouterPaths.HOME} element={<LayoutTemplate />}>
        {AppRoutes.map((route) => {
          if (!route.skipLayout)
            return <Route path={route.path} element={<route.element />} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
