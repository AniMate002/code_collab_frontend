import React from "react";
import { AuthFormWrapper } from "../../templates/Auth/AuthFormWrapper.template.tsx";
import Input from "../../atoms/Input/Input.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { useSignupMutation } from "../../../store/api/auth.api.ts";
import { useForm } from "react-hook-form";
import { type SignupFormData, signupSchema } from "../../../types/auth.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "../../atoms/Toast/Toast.ts";

const SignupForm: React.FC = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data: SignupFormData) => {
    if (getValues("password") !== getValues("confirmPassword")) {
      setError("confirmPassword", {
        message: "Passwords do not match",
      });
      setError("password", {
        message: "Passwords do not match",
      });
      return;
    }
    try {
      await signup(data).unwrap();
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
        {...register("name")}
        label={"Name"}
        helperText={errors.name?.message}
        error={!!errors.name}
      />
      <Input
        label={"Email"}
        type={"email"}
        {...register("email")}
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <Input
        label={"Password"}
        type={"password"}
        {...register("password")}
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      <Input
        label={"Confirm password"}
        type={"password"}
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button type={"submit"} loading={isLoading} disabled={isLoading}>
        Continue
      </Button>
    </AuthFormWrapper>
  );
};

export default SignupForm;
