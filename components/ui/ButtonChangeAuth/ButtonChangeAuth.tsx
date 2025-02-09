import React from "react";
import clsx from "clsx";
import { useAuthStore } from "@/store/AuthStore/authStore";

export const ButtonChangeAuth: React.FC = () => {
  const { view, handleVisibleForm } = useAuthStore();

  return (
    <div
      className={clsx(
        "flex border w-max rounded-[100px] text-xs",
        view === "signIn" ? "border-bgColor" : "border-primaryColor"
      )}
    >
      <button
        onClick={() => handleVisibleForm("signIn")}
        className={clsx(
          "py-[10px] px-[20px] w-[120px] transition-all duration-700 rounded-tl-3xl rounded-bl-3xl",
          view === "signIn"
            ? "text-primaryColor bg-bgColor"
            : "text-primaryColor"
        )}
      >
        INGRESAR
      </button>
      <button
        onClick={() => handleVisibleForm("signUp")}
        className={clsx(
          "py-[10px] px-[20px] w-[120px] transition-all duration-700 rounded-tr-3xl rounded-br-3xl",
          view === "signUp"
            ? "text-letterColorLight bg-primaryColor"
            : "text-letterColorLight"
        )}
      >
        REGISTRARSE
      </button>
    </div>
  );
};

export default ButtonChangeAuth;
