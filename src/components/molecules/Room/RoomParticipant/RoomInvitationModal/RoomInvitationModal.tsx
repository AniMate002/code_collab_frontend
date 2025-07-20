import React from "react";
import { Modal, Skeleton } from "@mui/material";
import {
  RoomInvitationModalWrapper,
  UserSelectInvitationWrapper,
} from "./styles.ts";
import Button from "../../../../atoms/Button/Button.tsx";
import SecondaryButton from "../../../../atoms/SecondaryButton/SecondaryButton.tsx";
import { useGetUserFollowersQuery } from "../../../../../store/api/user.api.ts";
import { useAuth } from "../../../../../providers/auth.provider.tsx";
import Title from "../../../../atoms/Title/Title.tsx";
import SecondaryText from "../../../../atoms/SecondaryText/SecondaryText.tsx";
import UserSelectItem from "../../../../atoms/UserCard/UserSelectItem.tsx";

interface RoomInvitationModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (to: string) => void;
  isLoadingSendInvitation: boolean;
}

const RoomInvitationModal: React.FC<RoomInvitationModalProps> = ({
  isOpen,
  setIsOpen,
  onSelect,
  isLoadingSendInvitation,
}) => {
  const { authUser } = useAuth();
  const [pickedUserId, setPickedUserId] = React.useState<string>("");
  const { data: followers, isLoading: isLoadingFollowers } =
    useGetUserFollowersQuery(authUser?._id.toString() || "");
  return (
    <Modal
      open={isOpen}
      onClose={() => setPickedUserId("")}
      aria-labelledby="Invite user"
      aria-describedby="Window for invite a user to the room"
    >
      <RoomInvitationModalWrapper>
        <Title>Send invitation to</Title>
        <UserSelectInvitationWrapper>
          {!followers ||
            (followers.length === 0 && <SecondaryText>No users</SecondaryText>)}
          {isLoadingFollowers && (
            <Skeleton variant="rounded" width={"100%"} height={120} />
          )}
          {followers &&
            followers.map((user) => (
              <UserSelectItem
                key={user._id}
                user={user}
                onClick={() => setPickedUserId(user._id)}
                isSelected={pickedUserId === user._id}
              />
            ))}
        </UserSelectInvitationWrapper>
        <Button
          loading={isLoadingFollowers || isLoadingSendInvitation}
          onClick={() => onSelect(pickedUserId)}
        >
          Send
        </Button>
        <SecondaryButton onClick={() => setIsOpen(false)}>
          Cancel
        </SecondaryButton>
      </RoomInvitationModalWrapper>
    </Modal>
  );
};

export default RoomInvitationModal;
