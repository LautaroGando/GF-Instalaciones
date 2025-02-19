import { useAdminProfileStore } from "@/store/AdminProfileStore/adminProfileStore";
import React from "react";
import { IButtonLogoutProps } from "./types";
import clsx from "clsx";

export const ButtonLogout: React.FC<IButtonLogoutProps> = ({
  classes,
}: IButtonLogoutProps) => {
  const { handleClose } = useAdminProfileStore();

  return (
    <button
      onClick={handleClose}
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
