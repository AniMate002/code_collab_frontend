import React from "react";
import { CreateRoomFormWrapper } from "./styles.ts";
import Input from "../../atoms/Input/Input.tsx";
import Select from "../../atoms/Select/Select.tsx";
import {
  type RoomFormMode,
  RoomFormModes,
  RoomTopics,
  RoomTypes,
} from "../../../constants/room.const.ts";
import Switch from "../../atoms/Switch/Switch.tsx";
import { FormControlLabel } from "@mui/material";
import ImagePicker from "../../atoms/ImagePicker/ImagePicker.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { useForm } from "react-hook-form";
import {
  type CreateRoomFormData,
  createRoomSchema,
  type Room,
} from "../../../types/room.types.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateRoomMutation,
  useEditRoomMutation,
} from "../../../store/api/room.api.ts";
import { useNavigate } from "react-router";
import { RouterPaths } from "../../../router/paths.tsx";
import { Toast } from "../../atoms/Toast/Toast.ts";

interface RoomFormProps {
  defaultValues?: Room;
  mode: RoomFormMode;
}

const RoomForm: React.FC<RoomFormProps> = ({ defaultValues, mode }) => {
  const [createRoom, { isLoading: isLoadingCreateRoom }] =
    useCreateRoomMutation();
  const [editRoom, { isLoading: isLoadingEditRoom }] = useEditRoomMutation();

  const navigate = useNavigate();
  const filteredRoomTopics = Object.fromEntries(
    Object.entries(RoomTopics).filter(([key]) => key !== "ALL"),
  );
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, errors },
  } = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      title: defaultValues ? defaultValues.title : "",
      topic: defaultValues ? defaultValues.topic : RoomTopics.General,
      description: defaultValues ? defaultValues.description : "",
      type: defaultValues ? defaultValues.type : RoomTypes.PUBLIC,
      image: defaultValues ? defaultValues.image : "",
    },
  });
  const onSubmit = async (data: CreateRoomFormData) => {
    try {
      if (mode === RoomFormModes.EDIT && defaultValues) {
        await editRoom({ _id: defaultValues._id.toString(), ...data }).unwrap();
        navigate(RouterPaths.ROOM(defaultValues._id.toString()));
      } else if (mode === RoomFormModes.CREATE) {
        await createRoom(data).unwrap();
        navigate(RouterPaths.MY_ROOMS);
      }
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  console.log(errors);
  return (
    <CreateRoomFormWrapper as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("title")}
        label={"Room name"}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <Select
        value={watch("topic")}
        onChange={(e: any) =>
          setValue("topic", e.target.value, { shouldDirty: true })
        }
        data={filteredRoomTopics}
        label={"Topic"}
      />
      <Input
        {...register("description")}
        label={"Description"}
        multiline
        rows={4}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <FormControlLabel
        control={
          <Switch
            checked={watch("type") === RoomTypes.PRIVATE}
            onChange={(e) =>
              setValue(
                "type",
                e.target.checked ? RoomTypes.PRIVATE : RoomTypes.PUBLIC,
                { shouldDirty: true },
              )
            }
            sx={{ m: 1 }}
          />
        }
        label="Private room"
      />
      {watch("image") && <img src={watch("image")} alt={"room image"} />}
      <ImagePicker
        setImage={(image) => setValue("image", image, { shouldDirty: true })}
      />
      <Button
        loading={isLoadingCreateRoom || isLoadingEditRoom}
        disabled={!isDirty}
        type={"submit"}
      >
        {mode === RoomFormModes.CREATE ? "Create room" : "Save room"}
      </Button>
    </CreateRoomFormWrapper>
  );
};

export default RoomForm;
