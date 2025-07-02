import React, { useRef } from "react";
import { StyledUpdateProfileAvatarPicker } from "./styles.ts";
import { Toast } from "../../../atoms/Toast/Toast.ts";

interface UpdateProfileAvatarPickerProps {
  avatar: string;
  setAvatar: (avatar: string) => void;
}

const UpdateProfileAvatarPicker: React.FC<UpdateProfileAvatarPickerProps> = ({
  avatar,
  setAvatar,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAvatar(reader.result);
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
      <StyledUpdateProfileAvatarPicker
        sx={{ height: "200px", width: "200px" }}
        src={avatar}
        onClick={() => fileInputRef.current?.click()}
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </>
  );
};

export default UpdateProfileAvatarPicker;
