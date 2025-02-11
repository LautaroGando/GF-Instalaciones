import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/auth/logoSignIn.svg";
import FormSignIn from "./FormSignIn/FormSignIn";
import ButtonChangeAuth from "@/components/ui/ButtonChangeAuth/ButtonChangeAuth";
import Link from "next/link";
import { useAuthStore } from "@/store/AuthStore/authStore";
import ImageForm from "@/components/ui/ImageForm/ImageForm";
import clsx from "clsx";

export const SignIn: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <div className="w-full relative">
      {view === "signUp" && <ImageForm />}
      <div
        className={clsx(
          "w-full p-3 bg-signInGradient flex flex-col justify-between gap-10 h-[900px] transition-all duration-500 dark:bg-signInGradientDark",
          view === "signUp" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )}
      >
        <div className="flex flex-col items-center gap-10 w-full">
          <ButtonChangeAuth />
          <Image src={logo} alt="Logo" priority />
          <FormSignIn />
        </div>
        <Link
          href=""
          className="underline text-xs self-start dark:text-primaryColor"
        >
          Términos y condiciones.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
