import React from "react";
import type { User } from "../../../types/user.types.ts";
import { useGetUserActivityQuery } from "../../../store/api/user.api.ts";
import ActivityLine from "../../molecules/ActivityLine/ActivityLine.tsx";
import { Box } from "@mui/material";
import { ActivityLineModes } from "../../../constants/activity.const.ts";
import TabHeader from "../../molecules/TabHeader/TabHeader.tsx";

interface ProfileActivityProps {
  user: User;
}

const ProfileActivity: React.FC<ProfileActivityProps> = ({ user }) => {
  const { data: userActivity, isLoading } = useGetUserActivityQuery(
    user._id.toString(),
  );
  return (
    <Box>
      <TabHeader title={"Activity"} showButton={false} />
      <ActivityLine
        activities={userActivity || []}
        isLoading={isLoading}
        mode={ActivityLineModes.USER}
      />
    </Box>
  );
};

export default ProfileActivity;
