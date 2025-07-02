import React, { useMemo } from "react";
import { Route, Routes } from "react-router";
import { RouterPaths } from "./paths.tsx";
import LayoutTemplate from "../components/templates/Layout/Layout.template.tsx";

import { AppRoutes } from "./router.tsx";
import AuthGuard from "../components/templates/Auth/AuthGuard.tsx";

const AppRouter: React.FC = () => {
  const routesWithoutLayout = useMemo(
    () =>
      AppRoutes.filter((route) => route.skipLayout).map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      )),
    [AppRoutes],
  );

  const routesWithLayoutNoAuth = useMemo(
    () =>
      AppRoutes.filter((route) => !route.skipLayout && !route.requireAuth).map(
        (route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ),
      ),
    [AppRoutes],
  );

  const routesWithLayoutRequireAuth = useMemo(
    () =>
      AppRoutes.filter((route) => !route.skipLayout && route.requireAuth).map(
        (route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ),
      ),
    [AppRoutes],
  );

  return (
    <Routes>
      {routesWithoutLayout}
      <Route path={RouterPaths.HOME} element={<LayoutTemplate />}>
        {routesWithLayoutNoAuth}
      </Route>
      <Route path={RouterPaths.HOME} element={<AuthGuard />}>
        {routesWithLayoutRequireAuth}
      </Route>
    </Routes>
  );
};

export default AppRouter;
