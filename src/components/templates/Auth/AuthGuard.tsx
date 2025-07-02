import React from "react";
import { useAuth } from "../../../providers/auth.provider.tsx";
import { Navigate, useLocation } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import LayoutTemplate from "../Layout/Layout.template.tsx";

const AuthGuard: React.FC = () => {
  const { isAuth, authUser } = useAuth();
  const location = useLocation();
  if (!isAuth || !authUser)
    return (
      <Navigate to={RouterPaths.LOGIN} replace state={{ from: location }} />
    );
  return <LayoutTemplate />;
};

export default AuthGuard;
