import React from "react";
import {
  useGetRoomFilesQuery,
  useSendRoomFileMutation,
} from "../../../../../store/api/room.api.ts";
import TabHeader from "../../../../molecules/TabHeader/TabHeader.tsx";
import RoomFilesUploadSection from "../../../../molecules/Room/RoomParticipant/RoomFiles/RoomFilesUploadSection.tsx";
import { Toast } from "../../../../atoms/Toast/Toast.ts";
import RoomFilesImageGrid from "../../../../molecules/Room/RoomParticipant/RoomFiles/RoomFilesImageGrid.tsx";
import { Box, Skeleton, useTheme } from "@mui/material";

interface RoomFilesProps {
  roomId: string;
}

const RoomFiles: React.FC<RoomFilesProps> = ({ roomId }) => {
  const [file, setFile] = React.useState("");
  const { data: files, isLoading } = useGetRoomFilesQuery(roomId);
  const [sendFile, { isLoading: isLoadingSendFile }] =
    useSendRoomFileMutation();

  if (isLoading) return <RoomFilesSkeleton />;

  const handleSendFile = async () => {
    if (!file) return;
    try {
      await sendFile({ roomId, file }).unwrap();
      setFile("");
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message || "Unknown error occurred",
      });
    }
  };

  return (
    <>
      <TabHeader title="Files" showButton={false} />
      <RoomFilesUploadSection
        file={file}
        setFile={setFile}
        handleSendFile={handleSendFile}
        isLoading={isLoadingSendFile}
        roomId={roomId}
      />
      {files && files.length > 0 && <RoomFilesImageGrid files={files} />}
    </>
  );
};

const RoomFilesSkeleton: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Skeleton
        variant="rounded"
        width={210}
        height={60}
        sx={{ marginBottom: theme.spacing(2) }}
      />
      <Skeleton variant="rounded" width={"full"} height={180} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: theme.spacing(1),
          marginTop: theme.spacing(2),
        }}
      >
        <Skeleton variant="rounded" width={300} height={180} />
        <Skeleton variant="rounded" width={300} height={180} />
        <Skeleton variant="rounded" width={300} height={180} />
        <Skeleton variant="rounded" width={300} height={180} />
      </Box>
    </>
  );
};

export default RoomFiles;
