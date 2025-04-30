import Image from "next/image";
import React from "react";
import logoDark from "@/public/assets/images/auth/logoSignUp.svg";
import logoLight from "@/public/assets/images/auth/logoSignIn.svg";
import FormSignUp from "./FormSignUp/FormSignUp";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { useMounted } from "@/hooks/useMounted";
import ImageForm from "@/components/ui/AuthComponents/ImageForm/ImageForm";
import ButtonChangeAuth from "@/components/ui/AuthComponents/ButtonChangeAuth/ButtonChangeAuth";

export const SignUp: React.FC = () => {
  const { view } = useAuthStore();
  const { isDark } = useThemeStore();
  const { mounted } = useMounted();

  return (
    <div className="w-full relative">
      {view === "signIn" && <ImageForm />}
      <div
        className={clsx(
          "w-full p-3 flex flex-col items-center gap-10 transition-all duration-300",
          view === "signIn" ? "hidden scale-75" : "flex scale-100"
        )}
      >
        <ButtonChangeAuth />
        {mounted && (
          <Image src={isDark ? logoLight : logoDark} alt="Logo" priority />
        )}
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
