import { useAdminProfileStore } from "@/store/AdminProfileStore/adminProfileStore";
import Link from "next/link";
import React from "react";
import { IButtonProfileProps } from "./types";
import clsx from "clsx";

export const ButtonProfile: React.FC<IButtonProfileProps> = ({
  classes,
}: IButtonProfileProps) => {
  const { handleClose } = useAdminProfileStore();

  return (
    <Link
      onClick={handleClose}
      href="/"
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
