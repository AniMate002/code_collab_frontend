import React from "react";
import ProfileTemplate, {
  ProfileTemplateSkeleton,
} from "../../templates/Profile/Profile.template.tsx";
import { Navigate, useParams } from "react-router";
import { useAuth } from "../../../providers/auth.provider.tsx";
import { RouterPaths } from "../../../router/paths.tsx";
import { useGetUserByIdQuery } from "../../../store/api/user.api.ts";

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string | "me" }>();
  const { isAuth, authUser } = useAuth();
  const { data, isLoading } = useGetUserByIdQuery(id || "", {
    skip: id === "me",
  });
  if (id !== "me" && isAuth && id?.toString() === authUser?._id.toString())
    return <Navigate to={RouterPaths.PROFILE("me")} replace />;
  if (!isAuth || !authUser) return <Navigate to={RouterPaths.HOME} replace />;
  const user = id === "me" ? authUser : data;
  if (isLoading) return <ProfileTemplateSkeleton />;
  if (!user) {
    return <Navigate to={RouterPaths.HOME} replace />;
  }
  return (
    <ProfileTemplate
      user={user}
      isMe={id === "me"}
      isFollowing={
        id === "me"
          ? false
          : user.followers.some(
              (follower) => follower.toString() === authUser._id.toString(),
            )
      }
    />
  );
};

export default ProfilePage;
