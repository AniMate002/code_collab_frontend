import React from "react";
import ProfileTemplate from "../../templates/Profile/Profile.template.tsx";
import { Navigate, useParams } from "react-router";
import { useAuth } from "../../../providers/auth.provider.tsx";
import { RouterPaths } from "../../../router/paths.tsx";

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string | "me" }>();
  const { isAuth, authUser } = useAuth();
  if (!isAuth) return <Navigate to={RouterPaths.HOME} replace />;
  const user = id === "me" ? authUser : undefined;
  return <ProfileTemplate user={user} />;
};

export default ProfilePage;
