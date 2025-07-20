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
  {
    title: "Create room",
    path: RouterPaths.CREATE_ROOM,
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/CreateRoom/CreateRoom.page.tsx"),
    ),
  },
  {
    title: "Room",
    path: RouterPaths.ROOM(":id"),
    element: React.lazy(() => import("../components/pages/Room/Room.page.tsx")),
  },
  {
    title: "Following",
    path: RouterPaths.FOLLOWING,
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/Following/Following.page.tsx"),
    ),
  },
  {
    title: "My Rooms",
    path: RouterPaths.MY_ROOMS,
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/MyRooms/MyRooms.page.tsx"),
    ),
  },
  {
    title: "Notifications",
    path: RouterPaths.NOTIFICATIONS,
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/Notifications/Notifications.page.tsx"),
    ),
  },
  {
    title: "Edit Room",
    path: RouterPaths.EDIT_ROOM(":id"),
    requireAuth: true,
    element: React.lazy(
      () => import("../components/pages/EditRoom/EditRoom.page.tsx"),
    ),
  },
];
