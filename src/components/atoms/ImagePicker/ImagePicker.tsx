import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SecondaryText from "../SecondaryText/SecondaryText.tsx";
import { theme } from "../../../constants/theme.const.tsx";
import { UploadWrapper } from "./styles.ts";
import { Toast } from "../Toast/Toast.ts";

interface ImagePickerProps {
  setImage: (image: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ setImage }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
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
    <>
      <UploadWrapper onClick={handlePick}>
        <Typography variant="subtitle1" fontWeight="bold">
          Upload a room image
        </Typography>
        <SecondaryText
          variant="caption"
          sx={{ mt: 1, mb: 2, fontSize: "12px" }}
        >
          Recommended size 1920×1080px. JPG, PNG, GIF
        </SecondaryText>
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          size="small"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
          }}
        >
          Upload image
        </Button>
      </UploadWrapper>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleImageChange}
      />
    </>
  );
};

export default ImagePicker;
