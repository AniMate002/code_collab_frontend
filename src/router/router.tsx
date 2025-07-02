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
    skipLayout: true,
    element: React.lazy(
      () => import("../components/pages/Login/Login.page.tsx"),
    ),
  },
  {
    title: "Signup",
    path: RouterPaths.SIGNUP,
    skipLayout: true,
    element: React.lazy(
      () => import("../components/pages/Signup/Signup.page.tsx"),
    ),
  },
  {
    title: "Profile",
    path: RouterPaths.PROFILE(":id"),
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/Profile/Profile.page.tsx"),
    ),
  },
  {
    title: "ExplorePage",
    path: RouterPaths.EXPLORE,
    element: React.lazy(
      () => import("../components/pages/Explore/Explore.page.tsx"),
    ),
  },
  {
    title: "Update Profile",
    path: RouterPaths.EDIT_MY_PROFILE,
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/Profile/UpdateProfile.page.tsx"),
    ),
  },
];
