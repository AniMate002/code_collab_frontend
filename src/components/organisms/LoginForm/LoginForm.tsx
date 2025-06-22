import React from "react";
import Input from "../../atoms/Input/Input.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { AuthFormWrapper } from "../../templates/Auth/AuthFormWrapper.template.tsx";
import { useLoginMutation } from "../../../store/api/auth.api.ts";
import { useForm } from "react-hook-form";
import { type LoginFormData, loginSchema } from "../../../types/auth.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "../../atoms/Toast/Toast.ts";

const LoginForm: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap();
      await Toast.fire({
        icon: "success",
        title: "Login successful",
      });
    } catch (e: any) {
      await Toast.fire({
        icon: "error",
        title: e.data.message,
      });
    }
  };
  return (
    <AuthFormWrapper as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        label={"Email"}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Input
        {...register("password")}
        label={"Password"}
        type={"password"}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type={"submit"} loading={isLoading} disabled={isLoading}>
        Continue
      </Button>
    </AuthFormWrapper>
  );
};

export default LoginForm;
