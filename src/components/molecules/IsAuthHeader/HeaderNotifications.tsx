import React from "react";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useGetNewUnreadNotificationsQuery } from "../../../store/api/notification.api.ts";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";

const HeaderNotifications: React.FC = () => {
  const { data: newNotificationsCounter } = useGetNewUnreadNotificationsQuery(
    undefined,
    { pollingInterval: 10000 },
  );
  const navigate = useNavigate();
  return (
    <>
      <SecondaryButton
        onClick={() => navigate(RouterPaths.NOTIFICATIONS)}
        sx={{ width: "fit-content" }}
      >
        <NotificationsIcon />
        {newNotificationsCounter && newNotificationsCounter > 0 ? (
          <SecondaryText>
            {newNotificationsCounter} new notifications
          </SecondaryText>
        ) : null}
      </SecondaryButton>
    </>
  );
};

export default HeaderNotifications;
