import React from "react";
import Button from "../../atoms/Button/Button.tsx";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogoutMutation } from "../../../store/api/auth.api.ts";
import { Toast } from "../../atoms/Toast/Toast.ts";
import { useAuth } from "../../../providers/auth.provider.tsx";

const SidebarBottom: React.FC = () => {
  const { isAuth } = useAuth();
  const [logout, { isLoading }] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logout().unwrap();
      await Toast.fire({
        icon: "success",
        title: "Logout successful",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  return (
    <>
      <Button sx={{ marginTop: "auto", marginBottom: "10px" }}>
        <span>Create Room</span>
        <AddIcon sx={{ fontSize: "20px" }} />
      </Button>
      {isAuth && (
        <SecondaryButton
          onClick={handleLogout}
          loading={isLoading}
          disabled={isLoading}
        >
          <span>Log out</span>
          <LogoutIcon sx={{ fontSize: "20px" }} />
        </SecondaryButton>
      )}
    </>
  );
};

export default SidebarBottom;
