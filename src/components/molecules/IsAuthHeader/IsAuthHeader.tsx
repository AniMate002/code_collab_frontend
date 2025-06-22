import React from "react";
import { IsAuthHeaderWrapper } from "../IsNotAuthHeader/styles.ts";
import type { User } from "../../../types/user.types.ts";
import { Avatar } from "@mui/material";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface IsAuthHeaderProps {
  authUser: User;
}

const IsAuthHeader: React.FC<IsAuthHeaderProps> = ({ authUser }) => {
  return (
    <IsAuthHeaderWrapper>
      <SecondaryButton sx={{ width: "fit-content" }}>
        <NotificationsIcon />
      </SecondaryButton>

      <Avatar
        alt={authUser.name}
        src={authUser.avatar}
        sx={{ display: "block", height: "50px", width: "50px" }}
      />
    </IsAuthHeaderWrapper>
  );
};

export default IsAuthHeader;
