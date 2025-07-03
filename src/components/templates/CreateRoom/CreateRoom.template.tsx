import React from "react";
import Title from "../../atoms/Title/Title";
import CreateRoomForm from "../../organisms/CreateRoomForm/CreateRoomForm.tsx";

const CreateRoomTemplate: React.FC = () => {
  return (
    <>
      <Title>Create a room</Title>
      <CreateRoomForm />
    </>
  );
};

export default CreateRoomTemplate;
