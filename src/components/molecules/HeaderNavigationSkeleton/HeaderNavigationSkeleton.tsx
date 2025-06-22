import React from "react";
import { Skeleton } from "@mui/material";

const HeaderNavigationSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      <Skeleton variant="circular" height={60} width={60} animation="wave" />
    </>
  );
};

export default HeaderNavigationSkeleton;
