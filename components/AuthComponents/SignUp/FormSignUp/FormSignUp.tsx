import React from "react";
import FormUser from "./FormUser/FormUser";
import { useAuthSignUpStore } from "@/store/AuthSignUpStore/authSignUpStore";
import FormInstaller from "./FormInstaller/FormInstaller";
import ButtonChangeSignUp from "@/components/ui/AuthComponents/ButtonChangeSignUp/ButtonChangeSignUp";

export const FormSignUp: React.FC = () => {
  const { form } = useAuthSignUpStore();

  return (
    <div className="flex flex-col gap-10 w-full">
      <ButtonChangeSignUp />
      {form === "user" ? <FormUser /> : <FormInstaller />}
    </div>
  );
};

export default FormSignUp;
