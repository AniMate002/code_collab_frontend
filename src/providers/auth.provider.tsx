import React, { createContext, useContext } from "react";
import { useGetMeQuery } from "../store/api/auth.api.ts";
import type { User } from "../types/user.types.ts";

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading, isError, error } = useGetMeQuery();
  return (
    <AuthContext.Provider value={{ authUser, isLoading, isError, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
