import React from "react";
import { IButtonLogoutProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useUserStore } from "@/store/UserStore/userStore";

export const ButtonLogout: React.FC<IButtonLogoutProps> = ({
  classes,
}: IButtonLogoutProps) => {
  const { handleClose } = useProfileStore();
  const { handleLogout } = useUserStore();

  return (
    <button
      onClick={() => {
        handleClose();
        handleLogout();
      }}
      className={clsx(
        "text-redColor border-b border-b-transparent transition-all duration-500 w-max mx-auto hover:border-b-redColor",
        classes
      )}
    >
      Cerrar sesión
    </button>
  );
};

export default ButtonLogout;
