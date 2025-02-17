import { useAuthSignUpStore } from "@/store/AuthSignUpStore/authSignUpStore";
import clsx from "clsx";
import React from "react";

export const ButtonChangeSignUp: React.FC = () => {
  const { form, handleFormSignUp } = useAuthSignUpStore();

  return (
    <div className="flex text-sm justify-center">
      <button
        onClick={() => handleFormSignUp("user")}
        className={clsx("h-[40px] w-[150px]", form === 'user' && 'text-primaryColor font-semibold bg-primaryColor/15 border-r border-primaryColor')}
      >
        Usuario
      </button>
      <button
        onClick={() => handleFormSignUp("installer")}
        className={clsx("h-[40px] w-[150px]", form === 'installer' && 'text-primaryColor font-semibold bg-primaryColor/15 border-l border-primaryColor')}
      >
        Instalador
      </button>
    </div>
  );
};

export default ButtonChangeSignUp;
