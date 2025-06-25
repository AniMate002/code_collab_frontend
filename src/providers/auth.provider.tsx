import React, { createContext, useContext } from "react";
import { useGetMeQuery } from "../store/api/auth.api.ts";
import type { User } from "../types/user.types.ts";

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  isError: false,
  error: null,
  isAuth: false,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: authUser,
    isLoading,
    isError,
    error,
  } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: false,
    refetchOnFocus: false,
  });

  return (
    <AuthContext.Provider
      value={{ authUser, isLoading, isError, error, isAuth: !!authUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
