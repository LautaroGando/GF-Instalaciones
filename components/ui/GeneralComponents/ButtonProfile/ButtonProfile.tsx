import Link from "next/link";
import React from "react";
import { IButtonProfileProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useMenuStore } from "@/store/MenuStore/menuStore";

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
        "text-primaryColor border-b border-b-transparent transition-all duration-500 w-max mx-auto hover:border-b-primaryColor",
        classes
      )}
    >
      Ver perfil
    </Link>
  );
};

export default ButtonProfile;
