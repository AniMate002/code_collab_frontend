import React from "react";
import type { User } from "../../../types/user.types.ts";
import { UserSelectItemWrapper } from "./styles.ts";
import { Avatar, useTheme } from "@mui/material";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";

interface UserSelectItemProps {
  user: User;
  isSelected: boolean;
  onClick: () => any;
}

const UserSelectItem: React.FC<UserSelectItemProps> = ({
  user,
  isSelected,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <UserSelectItemWrapper onClick={onClick}>
      <Avatar
        sx={{
          border: "2px solid",
          borderColor: isSelected ? "#0A80ED" : theme.palette.secondary.main,
        }}
        src={user.avatar}
        alt={user.name}
      />
      <SecondaryText
        sx={{
          maxWidth: "70px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {user.name}
      </SecondaryText>
    </UserSelectItemWrapper>
  );
};

export default UserSelectItem;
