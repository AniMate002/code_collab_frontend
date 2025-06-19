export const AuthMode = {
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
} as const;

export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];
