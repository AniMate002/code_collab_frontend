import React from "react";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import { useGetRoomContributorsQuery } from "../../../../../store/api/room.api.ts";
import UserGrid from "../../../../molecules/UserGrid/UserGrid.tsx";
import { UserGridModes } from "../../../../../types/user.types.ts";
import RoomInvitationModal from "../../../../molecules/Room/RoomParticipant/RoomInvitationModal/RoomInvitationModal.tsx";
import { useSendInvitationMutation } from "../../../../../store/api/notification.api.ts";
import { Toast } from "../../../../atoms/Toast/Toast.ts";

interface RoomContributorsProps {
  roomId: string;
}

const RoomContributors: React.FC<RoomContributorsProps> = ({ roomId }) => {
  const [isOpenInvitationModal, setIsOpenInvitationModal] =
    React.useState(false);
  const { data: contributors, isLoading } = useGetRoomContributorsQuery(roomId);
  const [sendInvitation, { isLoading: isLoadingSendInvitation }] =
    useSendInvitationMutation();

  const handleSendInvitation = async (to: string) => {
    if (!to) return;
    try {
      await sendInvitation({ to, roomId }).unwrap();
      setIsOpenInvitationModal(false);
      await Toast.fire({
        icon: "success",
        title: "Invitation sent successfully",
      });
    } catch (error) {
      await Toast.fire({
        icon: "error",
      });
    }
  };
  return (
    <>
      <TabHeader
        title="Contributors"
        showButton={true}
        btnLabel={"Invite user"}
        onClick={() => setIsOpenInvitationModal(true)}
      />
      <UserGrid
        users={contributors || []}
        isLoading={isLoading}
        mode={UserGridModes.COMPACT}
      />
      <RoomInvitationModal
        isOpen={isOpenInvitationModal}
        setIsOpen={setIsOpenInvitationModal}
        onSelect={handleSendInvitation}
        isLoadingSendInvitation={isLoadingSendInvitation}
      />
    </>
  );
};

export default RoomContributors;
