import React from "react";
import { HeaderNavigationWrapper } from "./styles.ts";
import IsNotAuthHeader from "../IsNotAuthHeader/IsNotAuthHeader.tsx";
import { useAuth } from "../../../providers/auth.provider.tsx";
import IsAuthHeader from "../IsAuthHeader/IsAuthHeader.tsx";
import HeaderNavigationSkeleton from "../HeaderNavigationSkeleton/HeaderNavigationSkeleton.tsx";

const HeaderNavigation: React.FC = () => {
  const { isAuth, authUser, isLoading } = useAuth();
  return (
    <HeaderNavigationWrapper>
      {isLoading ? (
        <HeaderNavigationSkeleton />
      ) : (
        <>
          {isAuth && authUser ? (
            <IsAuthHeader authUser={authUser} />
          ) : (
            <IsNotAuthHeader />
          )}
        </>
      )}
    </HeaderNavigationWrapper>
  );
};

export default HeaderNavigation;
