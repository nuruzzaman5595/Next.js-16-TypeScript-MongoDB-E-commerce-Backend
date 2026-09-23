export type ForgotPasswordPayload = {
  email: string;
};

export async function forgotPasswordController(payload: ForgotPasswordPayload) {
  const email = payload?.email?.trim();

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    };
  }

  return {
    success: true,
    message: "Password reset link sent successfully",
    data: {
      email,
    },
  };
}
