import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { RoomFilesUploadSectionWrapper } from "./styles.ts";
import SecondaryButton from "../../../../atoms/SecondaryButton/SecondaryButton.tsx";
import { Toast } from "../../../../atoms/Toast/Toast.ts";
import Button from "../../../../atoms/Button/Button.tsx";

interface RoomFilesUploadSectionProps {
  file: string;
  setFile: (file: string) => void;
  handleSendFile: () => Promise<void>;
  isLoading: boolean;
  roomId: string;
}

const RoomFilesUploadSection: React.FC<RoomFilesUploadSectionProps> = ({
  file,
  setFile,
  isLoading,
  handleSendFile,
}) => {
  const theme = useTheme();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setFile(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: "Unknown error occurred",
      }).then();
    }
  };

  return (
    <RoomFilesUploadSectionWrapper>
      {!file ? (
        <Box textAlign="center">
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            No files yet
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            Drag and drop or browse to upload files
          </Typography>
          <SecondaryButton
            sx={{
              mt: 2,
              borderRadius: "12px",
              color: theme.palette.primary.main,
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            Upload File
          </SecondaryButton>
        </Box>
      ) : (
        <Box textAlign="center">
          <Box
            component="img"
            src={file}
            alt="Uploaded preview"
            sx={{
              maxWidth: "100%",
              maxHeight: "600px",
              borderRadius: "12px",
              mb: 2,
              objectFit: "cover",
            }}
          />
          {file && (
            <Button
              loading={isLoading}
              onClick={handleSendFile}
              sx={{ marginBottom: theme.spacing(1), borderRadius: "12px" }}
            >
              Send
            </Button>
          )}
          <SecondaryButton
            onClick={() => setFile("")}
            sx={{
              borderRadius: "12px",
              color: theme.palette.primary.main,
            }}
          >
            Remove
          </SecondaryButton>
        </Box>
      )}
      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </RoomFilesUploadSectionWrapper>
  );
};

export default RoomFilesUploadSection;
