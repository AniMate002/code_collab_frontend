import React from "react";
import { Modal } from "@mui/material";
import { CreateLinkModalWrapper } from "../../../LinkTable/styles.ts";
import Title from "../../../../atoms/Title/Title.tsx";
import Input from "../../../../atoms/Input/Input.tsx";
import Button from "../../../../atoms/Button/Button.tsx";
import SecondaryButton from "../../../../atoms/SecondaryButton/SecondaryButton.tsx";
import DatePicker from "../../../../atoms/DatePicker/DatePicker.tsx";
import {
  useCreateRoomTaskMutation,
  useGetRoomContributorsQuery,
} from "../../../../../store/api/room.api.ts";
import { RoomTasksCreateTaskModalContributorSelectorWrapper } from "./styles.ts";
import UserSelectItem from "../../../../atoms/UserCard/UserSelectItem.tsx";
import { useForm } from "react-hook-form";
import {
  type CreateTaskFormData,
  createTaskFormSchema,
} from "../../../../../types/room.types.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import SecondaryText from "../../../../atoms/SecondaryText/SecondaryText.tsx";
import { Toast } from "../../../../atoms/Toast/Toast.ts";

interface RoomTaskCreateTaskModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
}

const RoomTaskCreateTaskModal: React.FC<RoomTaskCreateTaskModalProps> = ({
  isOpenModal,
  setIsOpenModal,
  roomId,
}) => {
  const { data: contributors, isLoading: isLoadingContributors } =
    useGetRoomContributorsQuery(roomId);
  const [createTask, { isLoading: isLoadingCreateRoomTask }] =
    useCreateRoomTaskMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      deadline: new Date(),
    },
  });
  if (isLoadingContributors) return <div>Loading...</div>;
  const renderedContributors = contributors?.map((contributor) => (
    <UserSelectItem
      user={contributor}
      key={contributor._id.toString()}
      isSelected={watch("assignedTo") === contributor._id.toString()}
      onClick={() => setValue("assignedTo", contributor._id.toString())}
    />
  ));
  console.log(roomId);
  const onSubmit = async (data: CreateTaskFormData) => {
    console.log(data);

    try {
      await createTask({ ...data, roomId: roomId.toString() }).unwrap();
      setIsOpenModal(false);
      reset();
      await Toast.fire({
        icon: "success",
        title: "Task created successfully",
      });
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    }
  };
  console.log(errors);
  return (
    <Modal
      open={isOpenModal}
      aria-labelledby="create-task-modal"
      aria-describedby="modal-for-creating-tasks"
    >
      <CreateLinkModalWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Create task</Title>
        <Input
          {...register("title")}
          label="Task name"
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <DatePicker
          label={"Select deadline"}
          value={watch("deadline")}
          onChange={(value: any) =>
            setValue("deadline", value, { shouldDirty: true })
          }
        />
        <Input
          {...register("description")}
          label="Task description"
          multiline
          rows={4}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Title sx={{ fontSize: "18px" }}>Assign this task to: </Title>
        {!!errors.assignedTo && (
          <SecondaryText sx={{ color: "red" }}>
            {errors.assignedTo?.message}
          </SecondaryText>
        )}
        <RoomTasksCreateTaskModalContributorSelectorWrapper>
          {renderedContributors}
        </RoomTasksCreateTaskModalContributorSelectorWrapper>

        <Button loading={isLoadingCreateRoomTask} type={"submit"}>
          Save
        </Button>
        <SecondaryButton onClick={() => setIsOpenModal(false)} type={"reset"}>
          Cancel
        </SecondaryButton>
      </CreateLinkModalWrapper>
    </Modal>
  );
};

export default RoomTaskCreateTaskModal;
