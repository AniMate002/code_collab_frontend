import React, { useMemo } from "react";
import { Route, Routes } from "react-router";
import { RouterPaths } from "./paths.tsx";
import LayoutTemplate from "../components/templates/Layout/Layout.template.tsx";

import { AppRoutes } from "./router.tsx";

const AppRouter: React.FC = () => {
  const routesWithoutLayout = useMemo(
    () =>
      AppRoutes.filter((route) => route.skipLayout).map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      )),
    [AppRoutes],
  );

  const routesWithLayout = useMemo(
    () =>
      AppRoutes.filter((route) => !route.skipLayout).map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      )),
    [AppRoutes],
  );

  return (
    <Routes>
      {routesWithoutLayout}
      <Route path={RouterPaths.HOME} element={<LayoutTemplate />}>
        {routesWithLayout}
      </Route>
    </Routes>
  );
};

export default AppRouter;
