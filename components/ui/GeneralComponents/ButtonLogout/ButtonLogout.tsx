import React from "react";
import { IButtonLogoutProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
        "text-redColor transition-all duration-500 w-max mx-auto",
        classes
      )}
    >
      <FontAwesomeIcon className="w-[20px] text-lg" icon={faRightFromBracket} />
      Cerrar sesión
    </button>
  );
};

export default ButtonLogout;
