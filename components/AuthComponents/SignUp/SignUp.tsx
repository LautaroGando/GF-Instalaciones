import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/auth/logoSignUp.svg";
import FormSignUp from "./FormSignUp/FormSignUp";
import ButtonChangeAuth from "@/components/ui/ButtonChangeAuth/ButtonChangeAuth";
import { useAuthStore } from "@/store/AuthStore/authStore";
import ImageForm from "@/components/ui/ImageForm/ImageForm";
import clsx from "clsx";

export const SignUp: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <div className="w-full relative">
      {view === "signIn" && <ImageForm />}
      <div
        className={clsx(
          "w-full p-3 flex flex-col items-center gap-10 transition-all duration-500",
          view === "signIn" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )}
      >
        <ButtonChangeAuth />
        <Image src={logo} alt="Logo" priority />
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
