import type { RouterType } from "../types/router.types.ts";
import * as React from "react";
import { RouterPaths } from "./paths.tsx";

export const AppRoutes: RouterType[] = [
  {
    title: "Home",
    path: RouterPaths.HOME,
    element: React.lazy(() => import("../components/pages/Home/Home.page.tsx")),
  },
  {
    title: "Login",
    path: RouterPaths.LOGIN,
    element: React.lazy(
      () => import("../components/pages/Login/Login.page.tsx"),
    ),
  },
];
