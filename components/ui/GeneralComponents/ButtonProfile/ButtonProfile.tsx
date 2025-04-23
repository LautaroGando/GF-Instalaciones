import Link from "next/link";
import React from "react";
import { IButtonProfileProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useMenuStore } from "@/store/MenuStore/menuStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const ButtonProfile: React.FC<IButtonProfileProps> = ({
  classes,
}: IButtonProfileProps) => {
  const { handleClose } = useProfileStore();
  const { handleCloseMenu } = useMenuStore();

  return (
    <Link
      onClick={() => {
        handleClose();
        handleCloseMenu();
      }}
      href="/dashboard/profile"
      className={clsx(
        "text-primaryColor transition-all duration-500 w-max mx-auto flex items-center gap-2",
        classes
      )}
    >
      <FontAwesomeIcon className="w-[20px] text-lg" icon={faInfoCircle} width={20} />
      Ver perfil
    </Link>
  );        
};

export default ButtonProfile;
