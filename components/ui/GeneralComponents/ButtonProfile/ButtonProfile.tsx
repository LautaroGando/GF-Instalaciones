import Link from "next/link";
import React from "react";
import { IButtonProfileProps } from "./types";
import clsx from "clsx";
import { useProfileStore } from "@/store/ProfileStore/profileStore";

export const ButtonProfile: React.FC<IButtonProfileProps> = ({
  classes,
}: IButtonProfileProps) => {
  const { handleClose } = useProfileStore();

  return (
    <Link
      onClick={handleClose}
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
