import React from "react";
import { Modal } from "@mui/material";
import { CreateLinkModalWrapper } from "./styles.ts";
import Input from "../../atoms/Input/Input.tsx";
import Title from "../../atoms/Title/Title.tsx";
import Button from "../../atoms/Button/Button.tsx";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton.tsx";
import { useForm } from "react-hook-form";
import {
  type CreateLinkFormData,
  createLinkFormSchema,
} from "../../../types/room.types.ts";
import { zodResolver } from "@hookform/resolvers/zod";

interface CreateLinkModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCreateLink: (data: { link: string; name: string }) => void;
  isLoadingCreateLink: boolean;
}

const CreateLinkModal: React.FC<CreateLinkModalProps> = ({
  isOpenModal,
  setIsOpenModal,
  handleCreateLink,
  isLoadingCreateLink,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateLinkFormData>({
    resolver: zodResolver(createLinkFormSchema),
  });
  const onSubmit = async (data: CreateLinkFormData) => {
    handleCreateLink(data);
    reset();
    setIsOpenModal(false);
  };
  return (
    <Modal
      open={isOpenModal}
      aria-labelledby="Create link"
      aria-describedby="Window for creating a link"
    >
      <CreateLinkModalWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Create link</Title>
        <Input
          {...register("name")}
          label="Link name"
          helperText={errors.name?.message}
          error={!!errors.name}
        />
        <Input
          {...register("link")}
          label="Link path"
          helperText={errors.link?.message}
          error={!!errors.link}
        />
        <Button loading={isLoadingCreateLink} type={"submit"}>
          Save
        </Button>
        <SecondaryButton type={"reset"} onClick={() => setIsOpenModal(false)}>
          Cancel
        </SecondaryButton>
      </CreateLinkModalWrapper>
    </Modal>
  );
};

export default CreateLinkModal;
