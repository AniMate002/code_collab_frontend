import React from "react";
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import {
  UpdateProfileFormSideWrapper,
  UpdateProfileFormWrapper,
} from "./styles.ts";
import { Box, Typography } from "@mui/material";
import UpdateProfileSkillsSelector from "../../molecules/Profile/UpdateProfile/UpdateProfileSkillsSelector.tsx";
import { useForm } from "react-hook-form";
import {
  type UpdateUserFormData,
  updateUserFormSchema,
} from "../../../types/user.types.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import UpdateProfileSpecializationSelector from "../../molecules/Profile/UpdateProfile/UpdateProfileSpecializationSelector.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { useAuth } from "../../../providers/auth.provider.tsx";
import { useUpdateUserMutation } from "../../../store/api/user.api.ts";
import { Toast } from "../../atoms/Toast/Toast.ts";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import { useGetMeQuery } from "../../../store/api/auth.api.ts";
import UpdateProfileAvatarPicker from "../../molecules/Profile/UpdateProfile/UpdateProfileAvatarPicker.tsx";

const UpdateProfileForm: React.FC = () => {
  const { authUser, isAuth } = useAuth();
  const navigate = useNavigate();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { refetch } = useGetMeQuery();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserFormSchema),
    defaultValues: isAuth ? authUser : {},
  });

  const onSubmit = async (data: UpdateUserFormData) => {
    if (!authUser) return;
    try {
      await updateUser({ ...data, _id: authUser?._id }).unwrap();
      await refetch();
      navigate(RouterPaths.PROFILE("me"));
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };

  return (
    <UpdateProfileFormWrapper as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <UpdateProfileFormSideWrapper sx={{ width: "40%" }}>
        <Title sx={{ fontSize: "36px" }}>Edit Profile</Title>

        <UpdateProfileAvatarPicker
          avatar={watch("avatar")}
          setAvatar={(avatar: string) =>
            setValue("avatar", avatar, { shouldDirty: true })
          }
        />

        <Box>
          <Typography>Name</Typography>
          <Input
            {...register("name")}
            helperText={errors.name?.message}
            error={!!errors.name}
          />
        </Box>

        <Box>
          <Typography>Email</Typography>
          <Input
            {...register("email")}
            helperText={errors.email?.message}
            error={!!errors.email}
          />
        </Box>

        <UpdateProfileSkillsSelector
          skills={watch("skills")}
          setSkills={(skills) =>
            setValue("skills", skills, { shouldDirty: true })
          }
        />
      </UpdateProfileFormSideWrapper>

      <UpdateProfileFormSideWrapper sx={{ width: "60%" }}>
        <Box>
          <Typography>About</Typography>
          <Input
            multiline
            rows={5}
            {...register("about")}
            helperText={errors.about?.message}
            error={!!errors.about}
          />
        </Box>

        <UpdateProfileSpecializationSelector
          selectedSpecialization={watch("specialization")}
          setSelectedSpecialization={(specialization) =>
            setValue("specialization", specialization, { shouldDirty: true })
          }
        />

        <Button loading={isLoading} disabled={!isDirty} type={"submit"}>
          Save Changes
        </Button>
      </UpdateProfileFormSideWrapper>
    </UpdateProfileFormWrapper>
  );
};

export default UpdateProfileForm;
