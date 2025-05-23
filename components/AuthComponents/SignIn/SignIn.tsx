import Image from "next/image";
import React from "react";
import logoLight from "@/public/assets/images/auth/logoSignIn.svg";
import logoDark from "@/public/assets/images/auth/logoSignUp.svg";
import FormSignIn from "./FormSignIn/FormSignIn";
import Link from "next/link";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { useMounted } from "@/hooks/useMounted";
import ImageForm from "@/components/ui/AuthComponents/ImageForm/ImageForm";
import ButtonChangeAuth from "@/components/ui/AuthComponents/ButtonChangeAuth/ButtonChangeAuth";

export const SignIn: React.FC = () => {
  const { view } = useAuthStore();
  const { isDark } = useThemeStore();
  const { mounted } = useMounted();

  return (
    <div className={clsx("w-full relative")}>
      {view === "signUp" && <ImageForm />}
      <div
        className={clsx(
          "w-full p-3 bg-signInGradient flex flex-col justify-between gap-10 min-h-[900px] max-h-[900px] transition-all duration-300 dark:bg-signInGradientDark",
          view === "signUp" ? "hidden scale-75" : "flex scale-100"
        )}
      >
        <div className="flex flex-col items-center gap-10 w-full">
          <ButtonChangeAuth />
          {mounted && (
            <Image src={isDark ? logoDark : logoLight} alt="Logo" priority />
          )}
          <FormSignIn />
        </div>
        <Link
          href="/terms-and-conditions"
          className="underline text-xs self-start dark:text-primaryColor"
        >
          Términos y condiciones.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
