import React, { createContext, useContext, useState, useEffect } from "react";
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
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { data: authUser, isLoading, isError, error } = useGetMeQuery();

  useEffect(() => {
    console.log(authUser);
    if (authUser) setIsAuth(true);
    else setIsAuth(false);
  }, [authUser]);

  return (
    <AuthContext.Provider
      value={{ authUser, isLoading, isError, error, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
