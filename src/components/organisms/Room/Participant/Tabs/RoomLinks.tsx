import React from "react";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import {
  useCreateRoomLinkMutation,
  useGetRoomLinksQuery,
} from "../../../../../store/api/room.api.ts";
import LinkTable from "../../../../molecules/LinkTable/LinkTable.tsx";
import CreateLinkModal from "../../../../molecules/LinkTable/CreateLinkModal.tsx";
import { Toast } from "../../../../atoms/Toast/Toast.ts";
import type { CreateLinkFormData } from "../../../../../types/room.types.ts";
import { Box, Skeleton, useTheme } from "@mui/material";

interface RoomLinksProps {
  roomId: string;
}
const RoomLinks: React.FC<RoomLinksProps> = ({ roomId }) => {
  const { data: links, isLoading } = useGetRoomLinksQuery(roomId);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [createLink, { isLoading: isLoadingCreateLink }] =
    useCreateRoomLinkMutation();

  const handleCreateLink = async (data: CreateLinkFormData) => {
    try {
      await createLink({ roomId, ...data }).unwrap();
      await Toast.fire({
        icon: "success",
        title: "Link created successfully",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };

  if (isLoading) return <RoomLinksSkeleton />;
  return (
    <>
      <TabHeader
        title="Links"
        showButton={true}
        btnLabel="Add link"
        onClick={() => setIsOpenModal(true)}
      />
      <LinkTable links={links || []} />
      <CreateLinkModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        handleCreateLink={handleCreateLink}
        isLoadingCreateLink={isLoadingCreateLink}
      />
    </>
  );
};

const RoomLinksSkeleton = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: theme.spacing(2) }}
    >
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rounded" width={"full"} height={60} />
      <Skeleton variant="rounded" width={"full"} height={60} />
      <Skeleton variant="rounded" width={"full"} height={60} />
    </Box>
  );
};

export default RoomLinks;
