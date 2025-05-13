"use client";
import React from "react";
import SignIn from "./SignIn/SignIn";
import { useAuthStore } from "@/store/AuthStore/authStore";
import SignUp from "./SignUp/SignUp";
import { useSize } from "@/hooks/useSize";
import { useAuthSignUpStore } from "@/store/AuthSignUpStore/authSignUpStore";
import FormSendEmail from "../RecoveryPasswordComponents/FormSendEmail/FormSendEmail";

export const Auth: React.FC = () => {
  const { view } = useAuthStore();
  const { form } = useAuthSignUpStore();
  const { size } = useSize();

  return (
    <div className="w-full flex flex-col items-center py-5 gap-10">
      {view === "signIn" && size < 1024 ? (
        <SignIn />
      ) : view === "signUp" && size < 1024 ? (
        <SignUp />
      ) : form === "user" ? (
        <div className="flex w-full">
          <SignIn />
          <SignUp />
        </div>
      ) : view === "signUp" ? (
        <SignUp />
      ) : (
        <div className="flex w-full">
          <SignIn />
          <SignUp />
        </div>
      )}
      <FormSendEmail />
    </div>
  );
};

export default Auth;
