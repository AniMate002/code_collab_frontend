import { useAuth } from "../providers/auth.provider.tsx";
import { useEffect, useState } from "react";

export const useRoomAdmin = (adminId: string) => {
  const { authUser, isAuth } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(authUser?._id === adminId);
  }, [authUser, isAuth, adminId]);
  return { isAdmin };
};
