import React from "react";
import { IButtonLogoutProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

export const ButtonLogout: React.FC<IButtonLogoutProps> = ({
  classes,
}: IButtonLogoutProps) => {
  const { handleClose } = useProfileStore();
  const { handleLogout } = useUserStore();
  const { isDark } = useThemeStore();

  return (
    <button
      onClick={() => {
        handleClose();
        handleLogout(isDark ? "#000000" : "#FAFAFA");
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
